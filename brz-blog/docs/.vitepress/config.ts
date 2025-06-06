import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
	// 网站标题
  title: "我的技术博客",
  base: '/brz-blog/',
  // 网站描述
  description: "一个基于VitePress的技术文档博客",
  // 主题相关配置
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      // 更多导航项...
    ],
    // 侧边栏配置
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' },
            // 更多侧边栏项...
          ]
        }
      ],
      // 更多侧边栏配置...
    }
  }, 
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '我的技术博客',
      description: '中文描述'
    },
    '/en/': {
      lang: 'en-US',
      title: 'My Tech Blog',
      description: 'English Description'
    }
  }
})
