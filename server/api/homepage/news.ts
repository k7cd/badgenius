export default defineEventHandler(async (event) => {
  const res: any = await $fetch(
    'https://rongdian-6gnblt23fe33efea-1313169432.ap-shanghai.app.tcloudbase.com/service/news/list',
    {
      method: 'post',
      body: {
        pageNumber: 0,
        pageSize: 6,
      },
    }
  )

  return res && res.data
})
