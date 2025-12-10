export default defineEventHandler(async () => {
  const files = import.meta.glob('~/content/references/*.json', { eager: true });

  return Object.values(files).map((mod: any) => mod.default || mod);
});
