#!/usr/bin/env python3
"""把 IBM Plex 裁成本站真正需要的字形，输出到 public/fonts/ 并生成 @font-face。

为什么要自建而不是引 CDN：站点主要读者在国内，Google Fonts 不通、cdnjs 时好时坏
（旧站从 cdnjs 拉 Font Awesome，正是要避开的坑）。全部资源自托管。

为什么要 subset：IBM Plex Sans SC 每个字重 3.8 MB，整份发出去不可接受。
这里扫描源码里实际出现的汉字，只保留这些字形 —— 内容变了重跑 `pnpm fonts` 即可。

用法：python3 scripts/build-fonts.py
"""
from __future__ import annotations

import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "fonts"
CSS_OUT = ROOT / "src" / "theme" / "fonts.css"

NM = ROOT / "node_modules" / "@ibm"
SRC_SANS = NM / "plex-sans" / "fonts" / "complete" / "woff2"
SRC_MONO = NM / "plex-mono" / "fonts" / "complete" / "woff2"
SRC_SC = NM / "plex-sans-sc" / "fonts" / "complete" / "woff2" / "hinted"

# 只用两个字重。层级靠尺寸、位置和字重，不靠颜色，也不靠第三个字重。
WEIGHTS = [("Regular", 400), ("Medium", 500)]

# 拉丁侧固定保留：基本拉丁 + 补充 + 常用标点 + 数学记号（w = exp z 之类）
LATIN_RANGES = (
    "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,"
    "U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,"
    "U+2190-21FF,U+2260,U+2264,U+2265,U+25A0-25FF,U+FEFF,U+FFFD"
)

# 扫描范围：所有会进到页面上的中文都在这些文件里
SCAN_GLOBS = ["src/**/*.ts", "src/**/*.vue", "index.html"]

CJK_RE = re.compile(
    r"[　-〿㐀-䶿一-鿿豈-﫿＀-￯]"
)


def scan_cjk() -> set[str]:
    """收集源码中出现过的每一个 CJK 字符与全角标点。"""
    found: set[str] = set()
    for pattern in SCAN_GLOBS:
        for path in ROOT.glob(pattern):
            found.update(CJK_RE.findall(path.read_text(encoding="utf-8")))
    return found


def subset(src: Path, dest: Path, *, unicodes: str | None, text: str | None) -> None:
    args = [
        sys.executable, "-m", "fontTools.subset", str(src),
        f"--output-file={dest}",
        "--flavor=woff2",
        "--layout-features=kern,liga,calt,locl",
        "--no-hinting",
        "--desubroutinize",
        "--drop-tables+=DSIG",
        "--name-IDs=1,2,3,4,6",
    ]
    if unicodes:
        args.append(f"--unicodes={unicodes}")
    if text:
        args.append(f"--text={text}")
    subprocess.run(args, check=True)


FACE = """@font-face {{
  font-family: '{family}';
  font-style: normal;
  font-weight: {weight};
  font-display: swap;
  src: url('/fonts/{file}') format('woff2');
}}
"""


def main() -> None:
    for src in (SRC_SANS, SRC_MONO, SRC_SC):
        if not src.is_dir():
            sys.exit(f"字体源缺失：{src}\n先跑 pnpm install")

    OUT.mkdir(parents=True, exist_ok=True)
    cjk = scan_cjk()
    if not cjk:
        sys.exit("源码里没扫到任何汉字 —— 检查 SCAN_GLOBS")
    cjk_text = "".join(sorted(cjk))

    faces: list[str] = []
    report: list[tuple[str, int]] = []

    jobs = [
        ("IBM Plex Sans", SRC_SANS, "IBMPlexSans", LATIN_RANGES, None),
        ("IBM Plex Mono", SRC_MONO, "IBMPlexMono", LATIN_RANGES, None),
        # SC 只留实际用到的字：字形数从两万多降到三位数
        ("IBM Plex Sans SC", SRC_SC, "IBMPlexSansSC", None, cjk_text),
    ]

    for family, src_dir, stem, unicodes, text in jobs:
        for style, weight in WEIGHTS:
            src = src_dir / f"{stem}-{style}.woff2"
            out_name = f"{stem}-{style}.subset.woff2"
            dest = OUT / out_name
            subset(src, dest, unicodes=unicodes, text=text)
            faces.append(FACE.format(family=family, weight=weight, file=out_name))
            report.append((out_name, dest.stat().st_size))

    header = (
        "/* 由 scripts/build-fonts.py 生成，不要手改。\n"
        "   内容里的汉字变了就重跑 `pnpm fonts`，subset 会跟着更新。 */\n\n"
    )
    CSS_OUT.write_text(header + "\n".join(faces), encoding="utf-8")

    print(f"扫到 {len(cjk)} 个 CJK 字符")
    total = 0
    for name, size in report:
        total += size
        print(f"  {name:<38} {size / 1024:7.1f} KB")
    print(f"  {'合计':<36} {total / 1024:7.1f} KB")
    print(f"生成 {CSS_OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
