import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useNotesStore = defineStore('notes', {
  state: () => {
    return {
      notes: useStorage('notes', [
        {
          id: 1,
          title: 'One',
          text: 'Note one text',
          x: 100,
          y: 100,
        },
        {
          id: 2,
          title: 'Two',
          text: 'Note two text',
          x: 10,
          y: 10,
        },
      ]),
    }
  },
  actions: {
    addNote() {
      let note = {
        id: this.notes.length + 1,
        title: 'Your title',
        text: 'Your text',
        x: 300,
        y: 300,
      }
      this.notes.push(note)
    },
    removeNote(id) {
      this.notes.splice(id, 1)
    },
  },
})
