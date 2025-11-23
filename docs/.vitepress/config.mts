import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hacknet.wiki",
  description: "Hacknet (Extension) 教程、文档与参考",
  lang: "zh-CN",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "Extension 教程", link: "/extension-tutorial" },
      { text: "参考", link: "/reference" },
      { text: "常见问题", link: "/hnfaq" },
      {
        text: "关于",
        items: [
          { text: "行为准则", link: "/code_of_conduct" },
          { text: "贡献指南", link: "/contributing" },
        ],
      },
    ],

    sidebar: {
      "/hnfaq": [],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/UnHacknet/hacknet-wiki" },
    ],
  },
});
