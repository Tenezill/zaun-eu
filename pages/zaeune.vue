<template>
  <div class="mx-auto max-w-6xl px-4 py-12">
    <header class="mb-8">
      <h1 class="text-3xl font-semibold text-[#42474F]">Betonzaun-Modelle</h1>
      <p class="mt-2 text-sm text-[#5b626d]">
        Alle unsere Zaunelemente werden aus hochwertigem Beton gefertigt und in verschiedenen Designs angeboten.
      </p>
    </header>

    <div class="grid gap-6 md:grid-cols-3">
      <article
        v-for="fence in fences"
        :key="fence.slug"
        class="rounded-xl border border-[#D4D7DC] bg-white shadow-sm overflow-hidden flex flex-col"
      >
        <NuxtLink :to="`/zaeune/${fence.slug}`" class="flex-1 flex flex-col">
          <div class="aspect-[4/3] bg-[#F5F6F8]">
            <img
              v-if="fence.image"
              :src="fence.image"
              :alt="fence.title"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="p-4 text-sm">
            <h2 class="text-base font-semibold text-[#42474F] mb-1">
              {{ fence.title }}
            </h2>
            <p class="text-xs text-[#5b626d] mb-2">
              {{ fence.shortDescription }}
            </p>
            <p class="text-xs text-[#5b626d]">
              Höhe: {{ fence.height }} cm · Länge: {{ fence.length }} cm
            </p>
          </div>
        </NuxtLink>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: fences } = await useFetch('/api/fences')
</script>
