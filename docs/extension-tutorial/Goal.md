# Goal （目标）

Goal 用于定义 Mission 的完成条件。由 `<goals>` 包裹着的 `<goal>` 便是 Goal。Goal 种类繁多，上方的 `FileDeletion` 便是是其中的一种。

```xml
<mission>
  <goals>
    <goal type="filedeletion" target="playerComp" file="SecurityTracer.exe" path="bin" />
  </goals>
  ...
</mission>
```

在 *初次联系* 中，任务目标是去删除玩家电脑中 `bin` 目录下的 `SecurityTracer.exe` 文件。上方的 `FileDeletion` Goal 其实就是 *初次联系* 的 Goal。

一个任务可以有多个 Goal。

```xml
<goals>
  <goal type="clearfolder" target="advExamplePC" path="home"/>
  <goal type="delay" time="10.0"/>
</goals>
```

## Goal 的完成检测

在默认情况下，Goal 的检测会在玩家回复邮件时进行。Mission 根元素有一个属性 `activeCheck` 可以将它改为持续，此时不一定需要回复邮件，任务只要 Goals 都满足了就会直接完成。

原版的 *初次联系* 中，删除后需要回复邮件。如果改为持续检测，玩家不需要回复邮件，只要删除 `SecurityTracer.exe` 文件（当然，其实是只要让那个地方没有 `SecurityTracer.exe` 文件就行），则任务就会直接完成。
```xml
<mission activeCheck="true">
  <goals>
    <goal type="filedeletion" target="playerComp" file="SecurityTracer.exe" path="bin" />
  </goals>
  ...
</mission>
```

## 简化版 *甲虫计划* 的 Goal

在 Hacknet 本体中，起搏器过载后，会赋予玩家一个 Flag `E_Whit:DEAD`。*甲虫计划* 通过检查玩家是否具有这个 Flag 来判断是否完成任务。

```xml
<mission id="hubSet09">
  <goals>
    <goal type="HasFlag" target="E_Whit:DEAD" />
  </goals>
  ...
</mission>
```

## Goal 参考

你可以在 [参考：Goal](../reference/Goal.md) 中查看所有的 Goal 类型。
