<script setup>
import {useSearch} from "../composables/useSearch.js";

const { searchInput } = useSearch()
</script>

<template>
  <input
      class="translate duration-300 outline-0 border border-sky-300 focus:border-sky-700 px-3 py-2 bg-white dark:bg-black dark:text-white w-full max-w-170 sticky left-0"
      type="text" v-model="searchInput" :placeholder="$t('search_input.search')" >
</template>

<style scoped>

</style>