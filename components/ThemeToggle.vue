<template>
  <button
    @click="toggleTheme"
    class="rounded-md px-3 py-1.5 text-sm border transition
           border-concrete-mid dark:border-concrete-dark
           hover:bg-concrete-light dark:hover:bg-concrete-dark"
  >
    <span v-if="isDark">☀️ Day</span>
    <span v-else>🌙 Night</span>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(true)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

const toggleTheme = () => {
  const html = document.documentElement
  isDark.value = !isDark.value

  if (isDark.value) {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
</script>
