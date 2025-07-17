<script setup>

import {ref} from "vue";
import TwButton from "./ui/TwButton.vue";
import TwAddTaskModal from "./TwAddTaskModal.vue";
import TwLocaleSelect from "./TwLocaleSelect.vue";

const isOpenModal = ref(false)
const onClickAddTask = () => {
  isOpenModal.value = true
}
</script>

<template>
  <div class="flex items-center justify-between bg-sky-700/70 shadow-lg gap-5 w-full px-5 py-3">
    <h1 class="text-white font-bold text-2xl">TaskWave</h1>
    <div class="flex items-center gap-3">
      <tw-locale-select/>
      <tw-button type="white" @click="onClickAddTask">
        <template #default>
          <span>+</span>
          <span>{{ $t('header.add_task') }}</span>
        </template>
      </tw-button>
      <tw-add-task-modal v-model:open="isOpenModal" />
    </div>
  </div>
</template>

<style scoped>

</style>