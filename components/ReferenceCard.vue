<template>
  <article
    class="
      overflow-hidden rounded-2xl border shadow-sm transition-colors duration-300
      bg-concrete-light border-concrete-mid
      dark:bg-white/5 dark:border-white/10
    "
  >
    <div class="aspect-[4/3] bg-concrete-mid dark:bg-brand-primary/40"></div>

    <div class="p-3">
      <p class="text-sm font-medium text-concrete-dark dark:text-white">
        {{ title }}
      </p>
      <p class="text-xs text-concrete-dark/70 dark:text-white/70">
        {{ location }} · {{ year }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  location: string
  year: string
}>()
</script>
