<template>
  <article
    class="
      rounded-2xl p-5 shadow-sm border transition-colors duration-300
      bg-concrete-light border-concrete-mid text-concrete-dark
      dark:bg-white/5 dark:border-white/10 dark:text-white
    "
  >
    <h3 class="mb-2 text-base font-semibold font-[Poppins] text-concrete-dark dark:text-white">
      {{ title }}
    </h3>

    <p class="text-sm text-concrete-dark/80 dark:text-white/70">
      {{ text }}
    </p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  text: string
}>()
</script>
