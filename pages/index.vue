<template>
  <div class="">
    <div class="p-25 text-center space-y-8">
      <div class="text-6xl font-mono space-y-5">
        <div class="">Accounting made simple for</div>
        <div class="">
          small <span class="text-purple-600">businesses</span>.
        </div>
        <div class="text-2xl w-180 mx-auto">
          Most bookkeeping software is accurate, but hard to use. We make the
          opposite trade-off, and hope you don’t get audited.
        </div>
      </div>

      <div class="space-x-3">
        <button class="w-50 bg-purple-600 rounded-full text-white p-1">
          <div class="border-2 border-white rounded-full p-3">
            Get 6 months free
          </div>
        </button>
        <button class="w-50 bg-gray-800 rounded-full text-white p-1">
          <div class="border-2 border-white rounded-full p-3">Price list</div>
        </button>
      </div>
    </div>
    <div class="p-16" id="news">
      <div class="container mx-auto space-y-5">
        <div class="font-bold text-2xl">WHAT'S NEWS?</div>
        <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
          <NuxtLink v-for="i in newsList" :to="`/news/${i._id}`">
            <figure class="p-1 rounded-xl hover:bg-black duration-200">
              <div class="p-1 rounded-lg bg-white">
                <div
                  class="md:flex bg-gray-100 rounded-md p-6 cursor-pointer p-1"
                >
                  <div class="pt-3 md:p-3 text-center md:text-left space-y-4">
                    <blockquote>
                      <p class="text-lg font-semibold">
                        {{ i.title }}
                      </p>
                    </blockquote>
                    <figcaption class="font-medium">
                      <div class="text-cyan-600">
                        {{ i.categoryList[0].name }}
                      </div>
                      <div class="text-gray-500">
                        {{ formatDate(i._createTime) }}
                      </div>
                    </figcaption>
                  </div>
                </div>
              </div>
            </figure>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- <div class="space-y-5"><div class="font-bold text-2xl">课程中心</div></div> -->
    <div class="bg-gray-100 p-16" id="recruitment">
      <div class="container mx-auto space-y-5">
        <div class="font-bold text-2xl">招聘信息</div>

        <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
          <NuxtLink v-for="i in jobsList" :to="`/news/${i._id}`">
            <figure class="p-1 rounded-xl hover:bg-black duration-200">
              <div class="p-1 rounded-lg bg-white">
                <div class="md:flex bg-white rounded-md p-6 cursor-pointer p-1">
                  <div class="pt-3 md:p-3 text-center md:text-left space-y-4">
                    <blockquote>
                      <p class="text-lg font-semibold">
                        {{ i.name }}
                      </p>
                    </blockquote>
                    <figcaption class="font-medium">
                      <div class="text-gray-500">
                        {{ formatDate(i._createTime) }}
                      </div>
                    </figcaption>
                  </div>
                </div>
              </div>
            </figure>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'
const { data: newsList } = await useLazyFetch('/api/homepage/news')
console.log('data', newsList.value)

const formatDate = (datetime) => {
  return dayjs(datetime).format('YYYY-MM-DD')
}

const { data: jobsList } = await useLazyFetch('/api/jobs/list')
console.log('🚀 ~ file: index.vue:51 ~ jobsList', jobsList.value)
</script>

<style></style>
