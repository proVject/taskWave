<script setup>

import TwHeader from "./TwHeader.vue";
import TwTaskColumn from "./TwTaskColumn.vue";
import {useTasks} from "../composables/useTasks.js";

const tasks = useTasks()
</script>

<template>
  <div class="container p-5 lg:p-10 mx-auto max-w-2xl w-full">
    <div class="bg-white rounded-md shadow-md my-10 shadow-lg">
      <tw-header />
      <div class="bg-white rounded-b-md gap-5 w-full px-5 py-5 grid grid-cols-3 gap-5">
        <tw-task-column title="To Do" v-model:tasks="tasks.todo" />
        <tw-task-column title="In Progress" v-model:tasks="tasks.inProgress" />
        <tw-task-column title="Done" v-model:tasks="tasks.done" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>