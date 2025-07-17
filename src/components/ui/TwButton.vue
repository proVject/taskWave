<script setup>
defineProps({
  type: { type: String, default: 'primary' },
})

const typeClasses = {
  primary: ['bg-sky-700/70', 'text-white', 'hover:bg-sky-700/80'],
  danger: ['bg-red-700/70', 'text-white', 'hover:bg-red-700/80'],
  white: ['hover:bg-amber-100', 'bg-white', 'text-sky-700/70']
}

</script>

<template>
  <button :class="typeClasses[type]" class="transition-colors duration-200 cursor-pointer font-semibold rounded-sm shadow-sm flex items-center gap-2 px-4 py-1">
    <slot></slot>
  </button>
</template>

<style scoped>

</style>