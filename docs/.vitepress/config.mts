import { defineConfig } from "vitepress";
import { transformerNotationMap } from "@shikijs/transformers";
import llmstxt from "vitepress-plugin-llms";
import { copyOrDownloadAsMarkdownButtons } from "vitepress-plugin-llms";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcExclude: ["hnpedia/**"],
  vite: {
    plugins: [
      llmstxt({
        excludeIndexPage: false,
        customLLMsTxtTemplate: `# {title}

{description}

{details}

## Table of Contents

- [menu & about](/index.md)

{toc}
`,
      }),
    ],
  },
  title: "Hacknet.wiki",
  description: "Hacknet (Extension) 文档中心",
  lang: "zh-CN",
  lastUpdated: true,
  cleanUrls: true,
  sitemap: {
    hostname: "https://hacknet.wiki",
  },
  themeConfig: {
    outline: "deep",
    footer: {
      message: `Documentation is licensed under the CC BY-NC-SA 4.0 License. <br/>
<img src="/logo01.6189a29f.png" width="16px" style="display:inline-block;vertical-align: middle;margin: 0 auto;"/>
<a href="https://beian.mps.gov.cn/#/query/webSearch?code=44030002010424" rel="noreferrer" target="_blank">粤公网安备44030002010424号</a>&nbsp;
<a href="https://beian.miit.gov.cn/" rel="noreferrer" target="_blank">粤ICP备2026007027号-1</a>`,
      copyright: "Copyright © 2025 FBIK. All rights reserved.",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "Extension 教程", link: "/extension-tutorial/" },
      { text: "参考文档", link: "/reference/" },
      // { text: "百科", link: "/hnpedia/" },
      { text: "常见问题", link: "/hnfaq" },
      {
        text: "Awesome",
        link: "https://hacknet.wiki/awesome/",
        target: "_blank",
        rel: "noopener",
      },
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
      // "/hnpedia/": [
      //   {
      //     text: "Hacknet 百科",
      //     items: [
      //       { text: "百科首页", link: "/hnpedia/" },
      //       { text: "基础操作", link: "/hnpedia/Commands" },
      //       { text: "核心机制", link: "/hnpedia/Mechanics" },
      //       { text: "全流程攻略", link: "/hnpedia/Walkthrough" },
      //       { text: "人物与剧情档案", link: "/hnpedia/Characters" },
      //       { text: "服务器速查表", link: "/hnpedia/Servers" },
      //       { text: "主线剧情", link: "/hnpedia/Story" },
      //       { text: "成就列表", link: "/hnpedia/Achievements" },
      //       { text: "游戏彩蛋", link: "/hnpedia/EasterEggs" },
      //       { text: "音乐与音效", link: "/hnpedia/Music" },
      //       { text: "程序与工具大全", link: "/hnpedia/Programs" },
      //       { text: "OS 主题系统", link: "/hnpedia/Themes" },
      //       { text: "服务器服务（Daemon）", link: "/hnpedia/Daemons" },
      //       { text: "人物数据库档案", link: "/hnpedia/PeopleDB" },
      //       { text: "游戏内可读文档", link: "/hnpedia/Files" },
      //       { text: "黑客技能与派系进流程", link: "/hnpedia/Progress" },
      //       { text: "网络地图结构", link: "/hnpedia/NetworkMap" },
      //       { text: "游戏内网站", link: "/hnpedia/Websites" },
      //       { text: "世界地点系统", link: "/hnpedia/Locations" },
      //       { text: "游戏模式与设置", link: "/hnpedia/Modes" },
      //       { text: "多语言与本地化", link: "/hnpedia/Locales" },
      //       { text: "敌对黑客入侵事件", link: "/hnpedia/HostileHacker" },
      //       { text: "随机生成系统", link: "/hnpedia/Generation" },
      //       { text: "存档系统", link: "/hnpedia/Saves" },
      //       { text: "账户与用户系统", link: "/hnpedia/Accounts" },
      //       { text: "防御与追踪深度解析", link: "/hnpedia/Defense" },
      //     ],
      //   },
      // ],
      "/extension-tutorial/": [
        {
          text: "Extension 教程",
          items: [
            { text: "介绍", link: "/extension-tutorial/" },
            { text: "准备工作", link: "/extension-tutorial/preparing" },
            { text: "项目结构", link: "/extension-tutorial/structure" },
            { text: "XML 注意事项", link: "/extension-tutorial/XMLNotice" },
          ],
        },
        {
          text: "Mission",
          items: [
            {
              text: "Mission",
              link: "/extension-tutorial/Mission",
            },
            {
              text: "MissionEmail",
              link: "/extension-tutorial/MissionEmail",
            },
            {
              text: "Goal",
              link: "/extension-tutorial/Goal",
            },
            {
              text: "NextMission",
              link: "/extension-tutorial/NextMission",
            },
            {
              text: "Posting",
              link: "/extension-tutorial/Posting",
            },
            {
              text: "MissionFunction",
              link: "/extension-tutorial/MissionFunction",
            },
            {
              text: "BranchMissions",
              link: "/extension-tutorial/BranchMissions",
            },
          ],
        },
        {
          text: "Flag",
          link: "/extension-tutorial/Flag",
        },
        {
          text: "Action",
          link: "/extension-tutorial/Action",
        },
        {
          text: "ExtensionInfo",
          link: "/extension-tutorial/ExtensionInfo",
        },
        {
          text: "ESequencer",
          link: "/extension-tutorial/ESequencer",
        },
        {
          text: "Logo",
          link: "/extension-tutorial/Logo",
        },
      ],
      "/reference/": [
        {
          text: "参考文档",
          items: [{ text: "Hacknet 参考", link: "/reference/" }],
        },
        {
          text: "Extension",
          items: [
            {
              text: "ExtensionInfo",
              link: "/reference/ExtensionInfo",
            },
            {
              text: "Logo",
              link: "/reference/Logo",
            },
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
                  text: "MissionEmail",
                  link: "/reference/MissionEmail",
                },
                {
                  text: "BranchMissions",
                  link: "/reference/BranchMissions",
                },
                {
                  text: "MissionFunction",
                  link: "/reference/MissionFunction",
                },
              ],
            },
            {
              text: "HackerScripts",
              link: "/reference/HackerScripts",
            },
            {
              text: "占位符",
              link: "/reference/Placeholder",
            },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/UnHacknet/hacknet-wiki" }],
    editLink: {
      pattern: "https://github.com/UnHacknet/hacknet-wiki/blob/master/docs/:path",
      text: "在 GitHub 上查看或编辑此页",
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
    image: {
      lazyLoad: true,
    },
    config(md) {
      md.use(copyOrDownloadAsMarkdownButtons);
    },
  },
});
