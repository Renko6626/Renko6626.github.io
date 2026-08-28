<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageHeading from '@/components/PageHeading.vue'
import NoteRow from '@/components/NoteRow.vue'
import { notes } from '@/content/notes'

const { t } = useI18n()
</script>

<template>
  <PageHeading
    :eyebrow="t('notes.eyebrow')"
    :title="t('notes.title')"
    :lead="t('notes.lead')"
  />
  <ul>
    <NoteRow v-for="note in notes" :key="note.id" :note="note" />
  </ul>
</template>
