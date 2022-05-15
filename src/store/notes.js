import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', {
  state: () => {
    return {
      notes: [
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
      ],
    }
  },
  actions: {
    addNote: (id, title, text) => {},
  },
})
