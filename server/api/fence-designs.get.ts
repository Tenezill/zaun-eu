export default defineEventHandler(async () => {
  // Load all JSON files from content/fenceDesigns
  const files = import.meta.glob('~/content/fenceDesigns/*.json', { eager: true })

  const designs = Object.values(files).map((mod: any) => mod.default || mod)

  // Optional: sort featured first, then by title
  designs.sort((a: any, b: any) => {
    if (a.isFeatured === b.isFeatured) {
      return a.title.localeCompare(b.title, 'de')
    }
    return a.isFeatured ? -1 : 1
  })

  return designs
})
