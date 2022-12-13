export default defineEventHandler(async (event) => {
  const res: any = await $fetch(
    'https://rongdian-6gnblt23fe33efea-1313169432.ap-shanghai.app.tcloudbase.com/service/homepage-category',
    {
      method: 'get',
    }
  )

  return res && res.data
})
