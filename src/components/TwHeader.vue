<script setup>

import {ref} from "vue";
import TwButton from "./ui/TwButton.vue";
import TwAddTaskModal from "./TwAddTaskModal.vue";

const isOpenModal = ref(false)
const onClickAddTask = () => {
  isOpenModal.value = true
}
</script>

<template>
  <div class="flex items-center justify-between bg-sky-700/70 rounded-t-md gap-5 w-full px-5 py-3">
    <h1 class="text-white font-bold text-2xl">TaskWave</h1>
    <div>
      <tw-button type="white" @click="onClickAddTask">
        <template #default>
          <span>+</span>
          <span>Add task</span>
        </template>
      </tw-button>
      <tw-add-task-modal v-model:open="isOpenModal" />
    </div>
  </div>
</template>

<style scoped>

</style>