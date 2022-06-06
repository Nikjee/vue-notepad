<script setup>
import Notes from '@/components/Notes.vue'
import { useNotesStore } from '@/store/notes'

const store = useNotesStore()
</script>

<template>
  <div class="flex align-items-center justify-content-center w-full h-screen">
    <Button
      icon="pi pi-plus"
      class="p-button-rounded z-5"
      @click="store.addNote(1)"
    />

    <Button
      icon="pi pi-circle"
      class="p-button-rounded z-5"
      @click="openModal"
    />
  </div>

  <Notes
    v-for="(note, index) in store.notes"
    class="fixed z-4"
    :storage-key="'note ' + note.id"
    :key="note.id"
    :title="note.title"
    :text="note.text"
    :id="index"
    :noteId="note.id"
  >
  </Notes>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: var(--surface-a);
  font-family: var(--font-family);
  font-weight: 400;
  color: var(--text-color);
}
</style>
