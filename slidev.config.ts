// 为了在 Build 环境中屏蔽导航栏

import { defineConfig } from 'slidev'

export default defineConfig({
  themeConfig: {
    hide: {
      navigation: process.env.NODE_ENV === 'production' ? true : false
    }
  }
})