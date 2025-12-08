<template>
  <div v-if="fence" class="mx-auto max-w-4xl px-4 py-12">
    <NuxtLink to="/zaeune" class="text-xs text-[#3A7F4B] hover:underline">&larr; Zur Übersicht</NuxtLink>

    <div class="mt-4 grid gap-6 md:grid-cols-[1.3fr,1fr]">
      <div>
        <div class="aspect-[4/3] bg-[#F5F6F8] rounded-xl overflow-hidden">
          <img
            v-if="fence.image"
            :src="fence.image"
            :alt="fence.title"
            class="h-full w-full object-cover"
          />
        </div>

        <div v-if="fence.gallery?.length" class="mt-4 grid grid-cols-4 gap-2">
          <img
            v-for="(img, i) in fence.gallery"
            :key="i"
            :src="typeof img === 'string' ? img : img.image"
            class="h-20 w-full object-cover rounded-md"
          />
        </div>
      </div>

      <aside class="text-sm">
        <h1 class="text-2xl font-semibold text-[#42474F] mb-2">
          {{ fence.title }}
        </h1>
        <p class="text-[#5b626d] mb-3">
          {{ fence.shortDescription }}
        </p>

        <ul class="space-y-1 text-[#5b626d] mb-4">
          <li><strong>Kategorie:</strong> {{ fence.category }}</li>
          <li><strong>Höhe:</strong> {{ fence.height }} cm</li>
          <li><strong>Länge pro Element:</strong> {{ fence.length }} cm</li>
          <li v-if="fence.surface"><strong>Oberfläche:</strong> {{ fence.surface }}</li>
        </ul>

        <div v-if="fence.colors?.length" class="mb-4">
          <p class="font-semibold text-[#42474F] mb-1 text-xs uppercase">Verfügbare Farben</p>
          <div class="flex flex-wrap gap-1 text-xs">
            <span
              v-for="(c, i) in fence.colors"
              :key="i"
              class="rounded-full border border-[#D4D7DC] px-2 py-0.5 bg-[#F5F6F8]"
            >
              {{ typeof c === 'string' ? c : c.color }}
            </span>
          </div>
        </div>

        <div v-if="fence.features?.length" class="mb-4">
          <p class="font-semibold text-[#42474F] mb-1 text-xs uppercase">Besonderheiten</p>
          <ul class="list-disc list-inside text-[#5b626d]">
            <li v-for="(f, i) in fence.features" :key="i">
              {{ typeof f === 'string' ? f : f.feature }}
            </li>
          </ul>
        </div>

        <NuxtLink
          to="#kontakt"  <!-- or your actual contact route -->
          class="inline-flex items-center justify-center rounded-md bg-[#3A7F4B] px-4 py-2 text-xs font-medium text-white hover:bg-[#326b3f] transition"
        >
          Angebot für dieses Modell anfragen
        </NuxtLink>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: fences } = await useFetch('/api/fences')

const fence = computed(() =>
  fences.value?.find((f: any) => f.slug === route.params.slug)
)
</script>
