import { promises as fs } from 'node:fs'
import { join } from 'node:path'

export default defineEventHandler(async () => {
  // Resolve the folder from the project root
  const directory = join(process.cwd(), 'content', 'fenceDesigns')

  let filenames: string[] = []

  try {
    filenames = await fs.readdir(directory)
  } catch (error) {
    console.error('[fence-designs] Failed to read directory:', directory, error)
    // In production, better to return an empty list than 500
    return []
  }

  const designs: any[] = []

  for (const filename of filenames) {
    if (!filename.endsWith('.json')) continue

    const filePath = join(directory, filename)

    try {
      const fileContent = await fs.readFile(filePath, 'utf8')
      const json = JSON.parse(fileContent)
      designs.push(json)
    } catch (error) {
      console.error('[fence-designs] Failed to read file:', filePath, error)
    }
  }

  designs.sort((a, b) => {
    if (a.isFeatured === b.isFeatured) {
      return a.title.localeCompare(b.title, 'de')
    }
    return a.isFeatured ? -1 : 1
  })

  return designs
})
