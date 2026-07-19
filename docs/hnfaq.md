<script setup>
import RainbowText from './components/RainbowText.vue'
</script>

# 常见问题

这里汇总了 Hacknet 使用及 Extension 开发过程中的常见问题。

## Q：玩 Hacknet 算入门黑客吗？{#q-can-i-be-hacker}

::: details A：（点击展开）
<RainbowText>不算</RainbowText>
:::

## Q：现实中存在类似 PortHack 的工具吗？{#q-port-hack-exists}
::: details A：（点击展开）
<RainbowText>没有</RainbowText>
:::

## Q：如何找到 Hacknet 游戏的根目录？ {#q-how-to-find-hacknet-root}

::: details A：（点击展开）
如果你的 Hacknet 是从 Steam 上下载的，在 Steam 库中找到 Hacknet 游戏，右键点击它，选择“管理”，然后找到“浏览本地文件”按钮，点击它即可打开游戏根目录。通常是 `[盘符]:\Program Files (x86)\Steam\steamapps\common\Hacknet` 或 `[盘符]:\SteamLibrary\steamapps\common\Hacknet`。

如果不是，你可以想办法找到 Hacknet 的快捷方式，或者启动 Hacknet 后在任务栏的 Hacknet 处右键——右键Hacknet——属性，然后查看目标或者“打开文件所在位置”。
:::

## 游戏打开黑屏/崩溃/慢 {#common-problem-from-steam}

见：https://steamcommunity.com/app/365450/discussions/0/451850849198782888/ 或它的中文翻译 https://steamcommunity.com/app/365450/discussions/0/343788552553568633/

## Extension 和 Mod 的区别 {#difference-between-ext-and-mod}

Hacknet 是一款**数据驱动**的游戏。游戏程序本身只是一个执行引擎，核心机制通过代码实现，而任务、剧情等内容则通过**数据**来定义。Extension（扩展）是玩家依据执行引擎的规则自制的"数据"，Steam Workshop 上分享的内容本质上也是"数据"。

Mod 是 Modification（修改）的缩写，中文译为**模组**。Hacknet 社区中最常用的模组框架是 [Hacknet-Pathfinder](https://github.com/Arkhist/Hacknet-Pathfinder)，它为开发者提供了通过编写代码来修改或增强游戏程序的工具，主要针对**执行引擎**进行改动。

由于 Extension 不涉及代码修改，仅对"数据"进行调整，因此通常认为 Extension 不属于 Mod 的范畴；而通过 Pathfinder 加载的自定义代码等，才被视为真正的 Mod。

Extension 与 Mod 的关系是相辅相成的：Mod 提供新的功能，Extension 则提供具体的内容。

部分中国 Hacknet 交流群会对混淆 Extension 和 Mod 概念的人进行处罚。在这些社区讨论相关内容时，请务必先弄清楚两者的区别。
