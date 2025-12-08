<script setup>
/*
 This ensures the theme is applied on app load.
*/
if (process.client) {
  const saved = localStorage.getItem('theme')
  const html = document.documentElement

  if (saved === 'light') {
    html.classList.remove('dark')
  } else {
    html.classList.add('dark')
  }
}
if (process.client) {
  let saved = localStorage.getItem('theme')

  if (!saved) {
    saved = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  }

  const html = document.documentElement
  saved === 'light' ? html.classList.remove('dark') : html.classList.add('dark')
}

</script>

<template>
  <NuxtPage />
</template>
