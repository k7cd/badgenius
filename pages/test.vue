<template>
  <div>
    {{ pending ? 'Loading' : count }}
  </div>
  <button @click="refresh">Refresh</button>
  <div>{{ me }}</div>
  <div>{{ env }}</div>
</template>
<script setup>
const { pending, data: count } = useLazyAsyncData('count', () =>
  $fetch('/api/count')
)
const refresh = () => refreshNuxtData('count')

const headers = useRequestHeaders()

const { data: me } = await useFetch('/api/me', {
  headers: {
    token: 1,
  },
  method: 'POST',
  body: {
    test: 'name',
  },
})
console.log('🚀 ~ file: test.vue:15 ~ data me:', me.value)

const env = ref()
const runtimeConfig = useRuntimeConfig()
console.log(
  '🚀 ~ file: test.vue:25 ~ runtimeConfig in client:',
  runtimeConfig.public
)
env.value = runtimeConfig.public
</script>
