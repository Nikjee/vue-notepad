<script setup>
import { UseDraggable as Draggable } from '@vueuse/components'
import Notes from '@/components/Notes.vue'
import { useNotesStore } from '@/store/notes'

const store = useNotesStore()
</script>

<template>
  <div class="flex align-items-center justify-content-center w-full h-screen">
    <Draggable
      v-for="(note, index) in store.notes"
      :initialValue="{ x: note.x, y: note.y }"
      class="fixed select-none cursor-pointer z-5"
      :storage-key="'vueuse-draggable' + note.id"
      storage-type="session"
      :key="note.id"
    >
      <Notes :title="note.title" :text="note.text" :id="index"> </Notes>
    </Draggable>
  </div>
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
