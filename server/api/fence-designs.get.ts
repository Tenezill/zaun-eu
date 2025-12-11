import { promises as fs } from 'fs'
import path from 'path'

export default defineEventHandler(async () => {
  const directory = path.resolve('content/fenceDesigns')
  const filenames = await fs.readdir(directory)

  const designs = []

  for (const filename of filenames) {
    if (filename.endsWith('.json')) {
      const filePath = path.join(directory, filename)
      const json = JSON.parse(await fs.readFile(filePath, 'utf8'))
      designs.push(json)
    }
  }

  designs.sort((a: any, b: any) => {
    if (a.isFeatured === b.isFeatured) {
      return a.title.localeCompare(b.title, 'de')
    }
    return a.isFeatured ? -1 : 1
  })

  return designs
})
