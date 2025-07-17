<script setup>
import TwModal from "./ui/TwModal.vue";
import TwButton from "./ui/TwButton.vue";
import {onMounted, ref, watchEffect} from "vue";
import {useTasks} from "../composables/useTasks.js";

const tasks = useTasks()

const open = defineModel('open')

const props = defineProps({
  task: {type: Object, required: true},
})

const taskToEdit = ref({})

watchEffect(() => {
  taskToEdit.value = {...props.task}
})

</script>

<template>
<tw-modal v-model:open="open">
  <template #header>
    <p class="text-xl font-bold">Edit task</p>
  </template>
  <template #default>
    <form class="flex flex-col gap-4" @submit.prevent>
      <input v-model="taskToEdit.title" type="text" class="translate duration-300 outline-0 border border-sky-300 focus:border-sky-700 px-3 py-2" placeholder="Title" />
      <textarea v-model="taskToEdit.description" class="resize-none translate duration-300 outline-0 border border-sky-300 focus:border-sky-700 px-3 py-2" placeholder="Description" />
      <div class="flex justify-between">
        <tw-button @click="$emit('remove', taskToEdit.id)" class="self-end" type="danger">Delete</tw-button>
        <tw-button @click="$emit('update', taskToEdit)" class="self-start" type="primary">Update</tw-button>
      </div>
    </form>
  </template>
</tw-modal>
</template>

<style scoped>

</style>