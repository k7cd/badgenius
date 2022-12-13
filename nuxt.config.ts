import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { loadEnv } from 'vite'
import ENV_DIR from './build/constant'

interface VITE_ENV_CONFIG {
  VITE_API_HOST: string
  VITE_PACK_ENV: string
  VITE_PACK_URL: string
}

const envScript = (process.env as any).npm_lifecycle_script.split(' ')
console.log('🚀 ~ file: nuxt.config.ts:8 ~ envScript', envScript)

const envName = envScript[envScript.length - 1] // 获取启动命令中的环境变量名称
const envData = loadEnv(envName, 'env') as unknown as VITE_ENV_CONFIG

console.log(`当前环境：${envName}`, envData)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: envData,
  },
  routeRules: {
    '/': { cors: false, ssr: true },
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  // css: ['@/assets/style.scss'],
  modules: ['nuxt-windicss'],
  vite: {
    envDir: ENV_DIR, // 指定env文件夹
    // css: {
    //   preprocessorOptions: {},
    // },

    plugins: [
      Components({
        dts: true, // enabled by default if `typescript` is installed
        resolvers: [IconsResolver()],
      }),
    ],
  },
})
