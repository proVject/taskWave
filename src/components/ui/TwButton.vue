<script setup>
defineProps({
  type: { type: String, default: 'primary' },
})

const typeClasses = {
  primary: ['bg-sky-700/70', 'text-white', 'hover:bg-sky-700/80', 'dark:bg-white', 'dark:text-sky-700/80', 'dark:hover:bg-sky-100'],
  danger: ['bg-red-700/70', 'text-white', 'hover:bg-red-700/80'],
  white: ['hover:bg-sky-100', 'bg-white', 'text-sky-700/70', 'dark:bg-black', 'dark:text-white', 'dark:hover:bg-sky-950'],
}

</script>

<template>
  <button :class="typeClasses[type]" class="transition-colors duration-200 cursor-pointer font-semibold rounded-sm shadow-sm flex items-center gap-2 px-4 py-1 text-sm sm:text-md">
    <slot></slot>
  </button>
</template>

<style scoped>

</style>