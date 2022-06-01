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
        id: this.notes.at(-1).id + 1,
        title: 'Note',
        text: '',
        x: 300,
        y: 300,
      }
      this.notes.push(note)
    },
    removeNote(id, noteId) {
      this.notes.splice(id, 1)
      localStorage.removeItem('note ' + noteId)
    },
  },
})
