export default defineEventHandler(async () => {
  const files = import.meta.glob('~/content/fences/*.json', { eager: true });

  const fences = Object.entries(files).map(([path, module]: [string, any]) => {
    const data = module.default || module;
    return {
      ...data,
      _path: path,
    };
  });

  // Optionally sort by title
  fences.sort((a, b) => a.title.localeCompare(b.title, 'de'));

  return fences;
});
