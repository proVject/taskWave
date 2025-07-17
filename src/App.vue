<script setup>
import TwBoard from "./components/TwBoard.vue";
import TwFooter from "./components/TwFooter.vue";
import TwHeader from "./components/TwHeader.vue";
</script>

<template>
  <div class="bg-sky-100 dark:bg-sky-950 min-h-screen h-full flex flex-col">
    <tw-header />
    <tw-board />
    <tw-footer />
  </div>
</template>

<style scoped>
</style>
