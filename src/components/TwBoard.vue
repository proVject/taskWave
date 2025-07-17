<script setup>

import TwHeader from "./TwHeader.vue";
import TwTaskColumn from "./TwTaskColumn.vue";
import {useTasks} from "../composables/useTasks.js";

const tasks = useTasks()
</script>

<template>
  <div class="container p-5 lg:p-10 mx-auto max-w-2xl flex-1">
    <div class="bg-white rounded-md shadow-md my-10 shadow-lg">
      <div class="bg-white rounded-md gap-5 w-full px-5 py-5 grid grid-cols-3 gap-5">
        <tw-task-column :title="$t('dashboard.todo')" v-model:tasks="tasks.todo" />
        <tw-task-column :title="$t('dashboard.in_progress')" v-model:tasks="tasks.inProgress" />
        <tw-task-column :title="$t('dashboard.done')" v-model:tasks="tasks.done" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>