export default defineEventHandler(async (event) => {
  const id = event.context.params.id
  const res: any = await $fetch(
    `https://rongdian-6gnblt23fe33efea-1313169432.ap-shanghai.app.tcloudbase.com/service/news/${id}`,
    {
      method: 'get',
    }
  )
  return res && res.data
})
