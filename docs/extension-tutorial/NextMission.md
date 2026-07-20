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
