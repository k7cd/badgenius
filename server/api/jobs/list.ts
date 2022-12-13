export default defineEventHandler(async (event) => {
  const res: any = await $fetch(
    'https://rongdian-6gnblt23fe33efea-1313169432.ap-shanghai.app.tcloudbase.com/service/recruitment/category/list',
    {
      method: 'POST',
    }
  )

  console.log('res', res)
  return res && res.data
})
