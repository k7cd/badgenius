export default defineEventHandler((event) => {
  const data = [
    { id: 1, title: 'nuxt3', completed: false },
    { id: 2, title: 'vue3', completed: true },
  ]
  return {
    code: 1,
    data,
  }
})
