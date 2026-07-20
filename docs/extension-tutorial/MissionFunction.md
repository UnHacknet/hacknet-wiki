# MissionFunction / Function

Function 也可以实时改变游戏中的部分内容。一部分与 “全局的状态” 相关的功能主要通过 Function 更改。

Function 通过 Mission 中的 `missionStart` 或 `missionEnd` 元素使用。这两个在 Mission 中都是可选元素。

在后续也可以通过 Action 的 [RunFunction](../reference/Action.md#runfunction) 来使用，暂时不需要了解。

Mission 开始时执行：
```xml
<missionStart val="7">changeSong</missionStart>
```
Mission 结束时执行：
```xml
<missionEnd>addRank</missionEnd>
```

参数的传递方法有在 Function 名称后面跟 `:[文本]` 和传递 值 使用。以下为在 Mission 中 使用文本参数和值参数的例子：
```xml
<!-- 值 参数 -->
<missionStart val="7">changeSong</missionStart>
<!-- 文本 参数 -->
<missionEnd>setFaction:Entropy</missionEnd>
```

在简化版 *甲虫计划* 中，任务开始时游戏将 BGM 改为了《Broken Boy》，然后在任务结束时候运行了一个专用 Function `junebugComplete`。根据[参考：MissionFunction#changeSong](../reference/MissionFunction.md#changesong)，Broken Boy 在 `changeSong` 对应的参数为 `9`。

```xml
<missionStart val="9">changeSong</missionStart>
<missionEnd val="1">junebugComplete</missionEnd>
```

## 关于 "MissionFunction"

有理由认为 Function 最早是用来给 Mission 使用的，游戏中有一部分 Function (比如上方的 `junebugComplete`) 也只是给 Hacknet 本体使用的（不是为 Extension 准备的），而且在 Hacknet 的源码中相关类就叫 `MissionFunctions` 。

参考：[MissionFunctions.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/MissionFunctions.cs)

## Function 参考

见 [参考：MissionFunction](../reference/MissionFunction.md)
