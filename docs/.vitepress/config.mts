import { defineConfig } from "vitepress";
import { transformerNotationMap } from "@shikijs/transformers";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hacknet.wiki",
  description: "Hacknet (Extension) 文档中心",
  lang: "zh-CN",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "Extension 教程", link: "/extension-tutorial" },
      { text: "参考文档", link: "/reference" },
      { text: "常见问题", link: "/hnfaq" },
      {
        text: "关于",
        items: [
          {
            text: "行为准则",
            link: "https://github.com/UnHacknet/hacknet-wiki/blob/master/code_of_conduct.md",
          },
          {
            text: "贡献指南",
            link: "https://github.com/UnHacknet/hacknet-wiki/blob/master/contributing.md",
          },
        ],
      },
    ],
    search: {
      provider: "local",
    },

    sidebar: {
      "/hnfaq": [],
      "/extension-tutorial": [
        {
          text: "Extension 教程",
          items: [
            { text: "开始", link: "/extension-tutorial/" },
            { text: "准备工作", link: "/extension-tutorial/preparing" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/UnHacknet/hacknet-wiki" },
    ],
    editLink: {
      pattern:
        "https://github.com/UnHacknet/hacknet-wiki/blob/master/main/docs/:path",
      text: "在 GitHub 上查看此页",
    },
  },

  markdown: {
    codeTransformers: [
      // 通过变更diff高亮标记来让vitepress的xml代码片段支持diff高亮
      // 参考：https://juejin.cn/post/7475597817010503692
      transformerNotationMap({
        classMap: { add: "diff add", del: "diff remove" },
        classActivePre: "has-diff",
        matchAlgorithm: "v3",
      }),
    ],
  },
});
