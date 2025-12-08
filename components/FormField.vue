<template>
  <div>
    <label
      class="
        mb-1 block text-xs font-medium transition-colors duration-300
        text-concrete-dark/80 dark:text-white/80
      "
    >
      {{ label }}
    </label>

    <input
      :type="type"
      :placeholder="placeholder"
      class="
        w-full rounded-md px-3 py-2 text-sm outline-none transition-colors duration-300
        bg-concrete-light border border-concrete-mid text-concrete-dark
        focus:border-brand-accent
        dark:bg-black/30 dark:border-white/20 dark:text-white
      "
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  type?: string
  placeholder?: string
}>()
</script>
