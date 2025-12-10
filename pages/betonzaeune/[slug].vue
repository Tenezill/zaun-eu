<template>
  <div
    v-if="design"
    class="min-h-screen bg-concrete-light text-concrete-dark dark:bg-brand-dark dark:text-white px-4 py-10"
  >
    <div class="mx-auto max-w-4xl space-y-6">
      <NuxtLink to="/betonzaeune" class="text-sm text-brand-accent hover:underline">
        ← Zur Übersicht
      </NuxtLink>

      <header class="space-y-3">
        <p class="text-xs uppercase tracking-[0.2em] text-brand-accent">
          Betonzaun Design
        </p>
        <h1 class="text-3xl font-[Poppins] font-semibold">
          {{ design.title }}
        </h1>
        <p class="text-sm text-concrete-dark/80 dark:text-white/70">
          {{ design.shortDescription }}
        </p>
      </header>

      <div v-if="design.mainImage" class="overflow-hidden rounded-2xl border border-concrete-mid/80 dark:border-white/10">
        <div class="aspect-[16/9] bg-concrete-mid/80 dark:bg-brand-primary/40">
          <img
            :src="design.mainImage"
            :alt="design.title"
            class="h-full w-full object-cover"
          />
        </div>
      </div>

      <section class="space-y-2 text-sm">
        <h2 class="text-lg font-semibold font-[Poppins]">Technische Daten</h2>

        <div class="grid gap-4 md:grid-cols-2 text-xs">
          <div>
            <p class="uppercase text-[10px] text-concrete-dark/60 dark:text-white/50">Höhen</p>
            <p class="mt-1">
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
            <p class="uppercase text-[10px] text-concrete-dark/60 dark:text-white/50">Farben</p>
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
      </section>

      <section v-if="design.longDescription" class="text-sm">
        <h2 class="text-lg font-semibold font-[Poppins] mb-2">Beschreibung</h2>
        <p class="text-concrete-dark/80 dark:text-white/70 whitespace-pre-line">
          {{ design.longDescription }}
        </p>
      </section>
    </div>
  </div>

  <div v-else class="min-h-screen flex items-center justify-center text-sm text-white">
    <p>Design nicht gefunden.</p>
  </div>
</template>

<script setup lang="ts">
interface Height { value: number }
interface Color { color: string }

interface FenceDesign {
  title: string
  slug: string
  shortDescription?: string
  longDescription?: string
  mainImage?: string
  heights?: Height[]
  colors?: Color[]
}

const route = useRoute()

const { data } = await useFetch<FenceDesign[]>('/api/fence-designs')

const design = computed(() =>
  (data.value || []).find((d) => d.slug === route.params.slug)
)
</script>
