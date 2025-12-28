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
    footer: {
      message:
        "Code is licensed under the MIT License. Documentation is licensed under the CC BY-SA 4.0 License.",
      copyright: "Copyright © 2025 FBIK. All rights reserved.",
    },
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
            { text: "项目结构", link: "/extension-tutorial/structure" },
          ],
        },
      ],
      "/reference": [
        {
          text: "参考文档",
          items: [{ text: "Hacknet 参考", link: "/reference/" }],
        },
        {
          text: "Extension",
          items: [
            {
              text: "Action & Faction",
              items: [
                {
                  text: "Action",
                  link: "/reference/Action",
                },
                {
                  text: "ConditionalActions",
                  link: "/reference/ConditionalActions",
                },
                {
                  text: "Faction",
                  link: "/reference/Faction",
                },
              ],
            },
            {
              text: "Mission",
              items: [
                {
                  text: "Mission",
                  link: "/reference/Mission",
                },
                {
                  text: "Goal",
                  link: "/reference/Goal",
                },
                {
                  text: "BranchMissions",
                  link: "/reference/BranchMissions",
                },
                {
                  text: "MissionEmail",
                  link: "/reference/MissionEmail",
                },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/UnHacknet/hacknet-wiki" },
    ],
    editLink: {
      pattern:
        "https://github.com/UnHacknet/hacknet-wiki/blob/master/docs/:path",
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
