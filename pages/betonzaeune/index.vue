<template>
  <div
    class="min-h-screen bg-concrete-light text-concrete-dark dark:bg-brand-dark dark:text-white transition-colors duration-300"
  >
    <main class="mx-auto max-w-6xl px-4 py-12 space-y-10">
      <header class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="text-xs uppercase tracking-[0.2em] text-brand-accent mb-2">
            Betonzäune
          </p>
          <h1 class="text-3xl md:text-4xl font-semibold font-[Poppins]">
            Betonzaun-Designs im Überblick
          </h1>
          <p class="mt-2 text-sm text-concrete-dark/80 dark:text-white/70 max-w-2xl">
            Wählen Sie aus verschiedenen Oberflächen, Formen und Höhen – von geschlossener
            Steinmauer bis zu luftigen Design-Elementen.
          </p>
        </div>

        <div class="flex items-center gap-3 text-xs text-concrete-dark/70 dark:text-white/60">
          <span class="hidden md:inline">Ansicht:</span>
          <span class="rounded-full border border-concrete-mid/70 px-3 py-1 dark:border-white/30">
            Showroom
          </span>
        </div>
      </header>

      <!-- GRID OF DESIGNS -->
      <section class="grid gap-6 md:grid-cols-2">
        <NuxtLink
          v-for="design in designs"
          :key="design.slug"
          :to="`/betonzaeune/${design.slug}`"
          class="group rounded-3xl overflow-hidden border border-concrete-mid/80 dark:border-white/10 bg-concrete-light dark:bg-white/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
        >
          <div class="relative">
            <div class="aspect-[16/9] bg-concrete-mid/80 dark:bg-brand-primary/40 overflow-hidden">
              <img
                v-if="design.mainImage"
                :src="design.mainImage"
                :alt="design.title"
                class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div
              v-if="design.isFeatured"
              class="absolute left-4 top-4 rounded-full bg-brand-accent px-3 py-1 text-xs font-medium text-brand-dark shadow"
            >
              Bestseller
            </div>
          </div>

          <div class="p-5 flex-1 flex flex-col gap-3">
            <div class="flex items-start justify-between gap-3">
              <div>
                <h2 class="text-lg font-semibold font-[Poppins] text-concrete-dark dark:text-white">
                  {{ design.title }}
                </h2>
                <p class="mt-1 text-xs text-concrete-dark/80 dark:text-white/70 line-clamp-3">
                  {{ design.shortDescription }}
                </p>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3 text-[11px] mt-auto">
              <div>
                <p class="uppercase tracking-wide text-[10px] text-concrete-dark/60 dark:text-white/50">
                  Höhen
                </p>
                <p class="mt-1 text-concrete-dark/80 dark:text-white/80">
                  <span
                    v-for="(h, i) in (design.heights || [])"
                    :key="i"
                    class="inline-block mr-1"
                  >
                    {{ h.value }} cm<span v-if="i < (design.heights?.length || 0) - 1">,</span>
                  </span>
                </p>
              </div>
              <div>
                <p class="uppercase tracking-wide text-[10px] text-concrete-dark/60 dark:text-white/50">
                  Farben
                </p>
                <div class="mt-1 flex flex-wrap gap-1">
                  <span
                    v-for="(c, i) in (design.colors || [])"
                    :key="i"
                    class="rounded-full border border-concrete-mid/80 dark:border-white/30 px-2 py-0.5"
                  >
                    {{ c.color }}
                  </span>
                </div>
              </div>
            </div>

            <div class="pt-2 flex items-center justify-between text-xs">
              <span class="text-brand-accent group-hover:underline">Details ansehen</span>
              <span class="text-concrete-dark/60 dark:text-white/50">
                {{ design.panelShapes?.length || 0 }} Panelformen
              </span>
            </div>
          </div>
        </NuxtLink>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
type Height = { value: number }
type Color = { color: string }
type PanelShape = { shape: string }

interface FenceDesign {
  title: string
  slug: string
  shortDescription?: string
  longDescription?: string
  mainImage?: string
  gallery?: { image: string }[]
  heights?: Height[]
  colors?: Color[]
  panelShapes?: PanelShape[]
  features?: { feature: string }[]
  isFeatured?: boolean
}

const { data } = await useFetch<FenceDesign[]>('/api/fence-designs')
const designs = computed(() => data.value || [])
</script>
