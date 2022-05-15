<script setup>
import { ref, watch } from 'vue'
import { useNotesStore } from '@/store/notes'

const props = defineProps({
  title: String,
  text: String,
  id: Number,
})

const store = useNotesStore()
const value = ref(props.text) || ref('Enter text')
store.notes[props.id].text = value
</script>

<template>
  <Card>
    <template #title>{{ props.title }}</template>
    <template #content>
      <Textarea v-model="value" :autoResize="true" rows="5" cols="30" />
    </template>
  </Card>
</template>
