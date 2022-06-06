<script setup>
import { ref, computed } from 'vue'
import { useNotesStore } from '@/store/notes'
import { useDraggable, useWindowSize, useStorage } from '@vueuse/core'

const props = defineProps({
  title: String,
  text: String,
  id: Number,
  noteId: Number,
  storageKey: String,
})

const dragger = ref(null)

const { width, height } = useWindowSize()

let pos = {
  x: width.value - 350,
  y: height.value - 350,
}

const { style } = useDraggable(dragger, {
  initialValue: useStorage(props.storageKey, pos, localStorage),
  preventDefault: true,
})

let _style = computed(() => {
  return `${style.value}  z-index:20;`
})

const store = useNotesStore()
const value = ref(props.text) || ref('')
const titleInput = ref(props.title) || ref('Note')
const showEdit = ref(false)

const editTitle = () => {
  showEdit.value = !showEdit
  store.notes[props.id].title = titleInput
}

const editText = () => {
  store.notes[props.id].text = value
}
</script>

<template>
  <Card class="card cursor-auto fixed" :style="_style">
    <template #title>
      <div class="card__title flex justify-content-between align-items-center">
        <div class="card__title-block">
          <div
            ref="dragger"
            v-if="!showEdit"
            class="card__title-text flex justify-content-center align-items-center"
          >
            <span>{{ props.title }}</span>
            <Button
              icon="pi pi-pencil"
              class="ml-2 p-button-secondary p-button-rounded p-button-sm p-button-text card__title-button"
              @click="showEdit = !showEdit"
            />
          </div>
          <div v-else class="card__title-edit">
            <span class="p-input-icon-right">
              <InputText
                class="p-inputtext-sm"
                type="text"
                v-model="titleInput"
              />
              <i @click="editTitle" class="pi pi-check" />
            </span>
          </div>
        </div>
        <Button
          icon="pi pi-times"
          class="p-button-rounded p-button-secondary p-button-text p-button-sm card__button-close"
          @click="store.removeNote(id, noteId)"
        />
      </div>
    </template>
    <template #content>
      <Textarea
        v-model.lazy="value"
        :autoResize="true"
        rows="5"
        cols="30"
        @change="editText"
      />
    </template>
  </Card>
</template>

<style lang="scss" scoped>
.p-card {
  background: var(--gray-900);
  &:deep(.p-card-body) {
    padding: 0.75rem;
  }
  &:deep(.p-card-content) {
    padding: 0.5rem 0;
  }
}
.p-inputtext {
  background: var(--surface-e);
}
.card {
  &:hover {
    .card__button-close {
      visibility: visible;
    }
  }

  &__title {
    &-text:hover {
      cursor: grab;
      .card__title-button {
        visibility: visible;
      }
    }
    &-button {
      visibility: hidden;
    }
  }

  &__button-close {
    visibility: hidden;
  }
}
</style>
