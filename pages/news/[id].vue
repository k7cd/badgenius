<template>
  <div>
    <div class="flex space-x-10">
      <div class="w-0 invisible sm:visible sm:w-50"></div>
      <div class="flex-1 mb-10 p-16 pt-10">
        <div v-if="pending">loading...</div>
        <div v-else-if="info" class="space-y-6">
          <h1 class="font-bold text-3xl">{{ info.title }}</h1>

          <div class="flex flex-row justify-start items-center space-x-3">
            <div class="text-cyan-600 cursor-pointer">
              {{ info.categoryList[0].name }}
            </div>
            <div class="text-gray-500">
              {{
                info._createTime &&
                dayjs(info._createTime).format('YYYY-MM-DD H:mm:ss')
              }}
            </div>
          </div>

          <div>
            <blockquote>
              <p class="text-lg bg-gray-100 p-6 rounded-md text-gray-600">
                {{ info.summary }}
              </p>
            </blockquote>
          </div>

          <div v-html="getContent()"></div>
        </div>
      </div>

      <div class="w-0 invisible sm:visible sm:w-50"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { marked } from 'marked'
import dayjs from 'dayjs'
import 'github-markdown-css'

// marked 选项
marked.setOptions({
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: true,
  xhtml: false,
})

const router = useRoute()
const params = router.params

const info = ref()

const getContent = () => {
  return info && info.value.contents && marked(info.value.contents)
}

const { pending, data: data } = await useFetch(`/api/news/${params.id}`, {
  method: 'GET',
})
console.log('🚀 ~ file: [id].vue:55 ~ pending', pending)
console.log('res......', data)
info.value =
  (data.value &&
    data.value.data &&
    data.value.data.length &&
    data.value.data[0]) ||
  null
</script>
