<template>
  <div
    class="flex flex-row justify-between items-center fixed top-0 w-full bg-white z-10"
  >
    <div class="flex flex-row justify-start items-center">
      <div class="p-3">
        <NuxtLink to="/">
          <img src="@/assets/logo.png" width="60" class="block" />
        </NuxtLink>
      </div>
      <div class="invisible md:visible p-5">
        <a
          v-for="i in menuList"
          class="px-3 cursor-pointer hover:font-bold"
          :href="`#${i.model}`"
        >
          {{ i.name }}
        </a>
      </div>
    </div>

    <div class="pr-8 space-x-2">
      <button
        class="rounded-full bg-gray-900 w-16 p-2 text-white hover:bg-gray-600 text-sm"
      >
        登录
      </button>
      <button
        class="rounded-full bg-purple-600 w-16 p-2 text-white hover:bg-purple-500 text-sm"
      >
        注册
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const menuList = ref<any>([])

const { data: data } = await useLazyFetch('/api/homepage', {})
console.log('data', data.value)

menuList.value = data.value
</script>

<style scoped></style>
