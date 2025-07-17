<script setup>
const open = defineModel('open')
</script>

<template>
  <transition name="fade" mode="out-in">
    <div v-if="open" @click="open = false" class="z-10 bg-sky-900/20 backdrop-blur-md fixed inset-0 flex justify-center items-center">
      <div @click.stop class="container rounded-lg max-w-lg bg-white shadow-lg px-8 py-6 relative">
        <button @click="open = false" class="cursor-pointer absolute top-3 right-4">X</button>
        <div v-if="$slots.header" class="mb-6 pb-4 border-b border-gray-400"><slot name="header" /></div>
        <div><slot/></div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>