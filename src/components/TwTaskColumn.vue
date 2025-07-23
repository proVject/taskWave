<script setup>
import {VueDraggableNext} from 'vue-draggable-next'
import {ref} from "vue";
import TwEditTaskModal from "./TwEditTaskModal.vue";
import {useSearch} from "../composables/useSearch.js";

const { searchInput } = useSearch();

const tasks = defineModel('tasks', {type: Array, default: () => []})
const isOpenEditModal = ref(false)
const taskToEdit = ref(null)

defineProps({
  title: {type: String, required: true},
})

const onClick = (task) => {
  taskToEdit.value = task
  isOpenEditModal.value = true
}

const onRemoveTask = (taskId) => {
  taskToEdit.value = null
  tasks.value = tasks.value.filter(task => task.id !== taskId)
  isOpenEditModal.value = false
}
const onUpdateTask = (newTask) => {
  taskToEdit.value = null
  const oldTaskIdx = tasks.value.findIndex(task => task.id === newTask.id)
  tasks.value.splice(oldTaskIdx, 1, newTask)
  isOpenEditModal.value = false
}

const shownTask = (t) => {
  if (!searchInput.value) return true
  return t.title.toLowerCase().includes(searchInput.value.toLowerCase())
      || t.description?.toLowerCase?.()?.includes?.(searchInput.value.toLowerCase())
}

</script>

<template>
  <div class="bg-sky-100 px-2 pb-2 h-100 dark:bg-sky-950 rounded-md shadow-md overflow-y-auto">
    <div class="sticky top-0 bg-sky-100 dark:bg-sky-950 p-2">{{ title }}</div>
    <VueDraggableNext
        class="flex flex-col gap-2 h-full"
        :list="tasks"
        :group="{ name: 'tasks', pull: true, put: true }"
        tag="ul"
        item-key="id"
    >
      <li
          v-show="shownTask(t)"
          @click="onClick(t)"
          class="shadow-md rounded-sm w-full bg-white px-2 py-1 dark:bg-black dark:text-white"
          v-for="t of tasks"
          :key="t.title"
      >{{ t.title }}
      </li>
    </VueDraggableNext>
  </div>
  <tw-edit-task-modal
      v-model:open="isOpenEditModal"
      :task="taskToEdit"
      @remove="onRemoveTask"
      @update="onUpdateTask"
  />
</template>

<style scoped>

</style>