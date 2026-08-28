#!/usr/bin/env python3
"""径向量子化 (radial quantization) 图形生成器 → 静态 SVG。

共形场论把柱面 R x S^1 上的量子化映到平面：w = exp(z)，z = sigma + i*tau。
- 柱面上 sigma = const 的等时面  -> 平面上以原点为心的圆，半径 r = exp(sigma)
- 柱面上 tau  = const 的时间流线 -> 平面上过原点的径向射线
- 柱面上的均匀网格因此在平面上变成「半径成几何级数」的同心圆 + 等角射线，
  向原点对数式加密、向外指数式稀疏。图形外围天然留白，正文就放在那里。
- 原点是局域算符的插入点（态-算符对应），全图唯一的 accent 落点。

输出用 currentColor 描边、non-scaling-stroke 保证发丝线在任何缩放下都是 1 物理像素。
确定性：无随机数，参数写死在下面。
"""
from __future__ import annotations

import argparse
import math
from pathlib import Path

# --- 参数（改这里就换图，输出仍然确定） ---
UNIT = 26.0          # 单位圆（sigma = 0 的等时面）在 viewBox 中的半径
RATIO = 1.32         # 相邻等时面的半径比 = exp(delta_sigma)
K_MIN, K_MAX = -10, 5  # 画出的 sigma 层级范围
RAYS = 24            # 等角射线数 = 柱面上取样的 tau 值个数
RAY_R0, RAY_R1 = 0.9, 172.0   # 射线的起止半径（外端超出 viewBox，切出画面）
VIEW = 100.0         # viewBox 半宽；半径超过它的圆会自然出血


def circles() -> list[float]:
    """sigma 均匀取样 -> 半径几何级数。"""
    return [UNIT * RATIO**k for k in range(K_MIN, K_MAX + 1)]


def rays() -> list[tuple[float, float, float, float]]:
    """tau 均匀取样 -> 径向线段的两端点。"""
    out = []
    for j in range(RAYS):
        tau = 2.0 * math.pi * j / RAYS
        c, s = math.cos(tau), math.sin(tau)
        out.append((RAY_R0 * c, RAY_R0 * s, RAY_R1 * c, RAY_R1 * s))
    return out


def fmt(x: float) -> str:
    return f"{x:.3f}".rstrip("0").rstrip(".")


def build(accent: str) -> str:
    vb = f"{-VIEW} {-VIEW} {2 * VIEW} {2 * VIEW}"
    L: list[str] = []
    L.append(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" '
        f'fill="none" stroke="currentColor" stroke-width="1" '
        f'vector-effect="non-scaling-stroke" aria-hidden="true" focusable="false">'
    )

    # 时间流线：tau = const 的径向射线
    L.append('<g stroke-opacity="0.28" stroke-linecap="butt">')
    for x0, y0, x1, y1 in rays():
        L.append(
            f'<line x1="{fmt(x0)}" y1="{fmt(y0)}" x2="{fmt(x1)}" y2="{fmt(y1)}" '
            f'vector-effect="non-scaling-stroke"/>'
        )
    L.append("</g>")

    # 等时面：sigma = const 的同心圆，半径成几何级数
    L.append('<g stroke-opacity="0.42">')
    for r in circles():
        if abs(r - UNIT) < 1e-9:
            continue  # 单位圆单独加重画
        L.append(f'<circle cx="0" cy="0" r="{fmt(r)}" vector-effect="non-scaling-stroke"/>')
    L.append("</g>")

    # sigma = 0 的等时面：全图唯一的加重线
    L.append(
        f'<circle cx="0" cy="0" r="{fmt(UNIT)}" stroke-width="2" '
        f'stroke-opacity="1" vector-effect="non-scaling-stroke"/>'
    )

    # 原点：局域算符插入点。全图唯一的 accent。
    L.append(f'<circle cx="0" cy="0" r="0.62" fill="{accent}" stroke="none"/>')

    L.append("</svg>")
    return "".join(L)


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--accent", default="var(--accent)", help="accent 落点的填充色")
    ap.add_argument("--out", default="src/assets/figures/radial-quantization.svg")
    args = ap.parse_args()

    out = Path(args.out)
    out.parent.mkdir(parents=True, exist_ok=True)
    svg = build(args.accent)
    out.write_text(svg + "\n", encoding="utf-8")
    print(f"{out}  {len(svg)} bytes  "
          f"{K_MAX - K_MIN + 1} 等时面 / {RAYS} 流线 / 半径比 {RATIO}")


if __name__ == "__main__":
    main()
