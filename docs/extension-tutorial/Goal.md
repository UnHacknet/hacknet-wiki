# Goal （目标）

Goal 用于定义 Mission 的完成条件。以下是 *初次联系* 的片段：
```xml
<mission id="bitMissionIntro">

  <goals>
    <goal type="filedeletion" target="playerComp" file="SecurityTracer.exe" path="bin" />
  </goals>
  ...
</mission>
```

由 `<goals>` 包裹着的 `<goal>` 便是 Goal。

在 *初次联系* 中，任务目标是去删除玩家电脑中 `bin` 目录下的 `SecurityTracer.exe` 文件。于是便使用了 FileDeletion Goal 来实现这个目的。

一个任务可以有多个 Goal。
```xml
<goals>
  <goal type="clearfolder" target="advExamplePC" path="home"/>
  <goal type="delay" time="10.0"/>
</goals>
```

## 所有的 Goal 类型

你可以在 [参考：Goal](/reference/Goal.md) 中查看所有的 Goal 类型。

## 小试牛刀

参考 [参考：Goal](/reference/Goal.md)，写一段`<goals>`片段，要求任务目标如下：
- 删除玩家电脑（Computer ID 是 `playerComp`）中 `sys` 目录下的 `x-server.sys` 文件。
- 要求玩家回复内容：`ohyeah`。

::: details 答案
```xml
<goals>
  <goal type="filedeletion" target="playerComp" file="x-server.sys" path="sys" />
  <goal type="getstring" target="ohyeah" />
</goals>
```
:::
