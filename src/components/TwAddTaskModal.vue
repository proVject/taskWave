<script setup>
import TwModal from "./ui/TwModal.vue";
import TwButton from "./ui/TwButton.vue";
import {ref, watch} from "vue";
import {useTasks} from "../composables/useTasks.js";
import { v4 as uuidv4 } from 'uuid'

const tasks = useTasks()

const open = defineModel('open')

const newTask = ref()

const onAddTask = () => {
  newTask.value.id = uuidv4()
  tasks.value['todo'].push(newTask.value)
  open.value = false
}

watch(open, () => {
  newTask.value = {}
})

</script>

<template>
<tw-modal v-model:open="open">
  <template #header>
    <p class="text-xl font-bold">Add task</p>
  </template>
  <template #default>
    <form class="flex flex-col gap-4" @submit.prevent>
      <input v-model="newTask.title" type="text" class="translate duration-300 outline-0 border border-sky-300 focus:border-sky-700 px-3 py-2" placeholder="Title" />
      <textarea v-model="newTask.description" class="resize-none translate duration-300 outline-0 border border-sky-300 focus:border-sky-700 px-3 py-2" placeholder="Description" />
      <tw-button @click="onAddTask" class="self-end" type="primary">Create</tw-button>
    </form>
  </template>
</tw-modal>
</template>

<style scoped>

</style>