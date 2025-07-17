<script setup>

import TwHeader from "./TwHeader.vue";
import TwTaskColumn from "./TwTaskColumn.vue";
import {useTasks} from "../composables/useTasks.js";
import TwSearchInput from "./TwSearchInput.vue";

const tasks = useTasks()
</script>

<template>
  <div class="container p-5 lg:p-10 mx-auto flex-1 max-w-4xl overflow-auto">
    <tw-search-input class="mb-5 mx-auto block" />
    <div class="bg-white rounded-md shadow-md mb-10 shadow-lg w-fit mx-auto">
      <div class="bg-white rounded-md gap-5 w-full px-5 py-5 grid grid-cols-[repeat(3,minmax(200px,1fr))] gap-5 dark:bg-black dark:text-white">
        <tw-task-column :title="$t('dashboard.todo')" v-model:tasks="tasks.todo" />
        <tw-task-column :title="$t('dashboard.in_progress')" v-model:tasks="tasks.inProgress" />
        <tw-task-column :title="$t('dashboard.done')" v-model:tasks="tasks.done" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>