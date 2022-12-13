export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  console.log(
    '🚀 ~ file: test.vue:25 ~ runtimeConfig in server:',
    runtimeConfig
  )

  const body = await readBody(event)

  return { body }
})
