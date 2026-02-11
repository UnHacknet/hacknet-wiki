import DefaultTheme from "vitepress/theme";
import "@catppuccin/vitepress/theme/mocha/peach.css";
import type { Theme } from "vitepress";
// @ts-ignore
import CopyOrDownloadAsMarkdownButtons from "vitepress-plugin-llms/vitepress-components/CopyOrDownloadAsMarkdownButtons.vue";
// @ts-check

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component(
      "CopyOrDownloadAsMarkdownButtons",
      CopyOrDownloadAsMarkdownButtons,
    );
  },
} satisfies Theme;
