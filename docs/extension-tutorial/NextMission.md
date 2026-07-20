# NextMission （下一个任务）

指定任务完成后，加载的下一个任务。

```xml
<mission>
  ...
  <nextMission>NONE</nextMission>
  ...
</mission>
```

`<nextMission>` 元素的内容是下一个任务对于扩展来说的相对路径，没有则用 `NONE` 表示。

我们假设下一个任务的路径是 `Missions/BitAdv_Intro.xml`。那么简化版 *甲虫计划* 的 `nextMission` 部分就是：
```xml
<nextMission>Missions/BitAdv_Intro.xml</nextMission> 
```

## Mission 静默加载

`<nextMission>` 元素有一可选属性 `isSilent`，用于指定是否静默加载 **当前** 任务。

如果一个 Mission 的 `isSilent` 属性为 `true`，则这个 Mission 在被加载后不会发送邮件。这种 Mission 通常用于充当 “跳板” 角色。

这是一个不会发送邮件，10秒后加载 Missions/NextMission.xml 的 Mission。
```xml
<mission activeCheck="true">
  <goals>
    <goal type="delay" time="10.0"/>
  </goals>
  <nextMission isSilent="true">Missions/NextMission.xml</nextMission>
  ...
</mission>
```

## NextMission 参考

见 [参考：Mission#nextmission](../reference/Mission.md#nextmission)
