# BranchMissions （分支任务）

BranchMissions 用于创建分支任务，通过满足不同 BranchMission 的 Goal 来触发不同的 `nextMission`。

在 Hacknet 中，甲虫计划就是一个良好的示范（我们简化了不重要的内容）：
::: code-group

```xml [HubSet09.xml]
<mission id="hubSet09">
  <goals>
    <goal type="HasFlag" target="E_Whit:DEAD" /> <!--[!code highlight]-->
  </goals>
  ...
  <nextMission>/BitAdv_Intro.xml</nextMission> <!--[!code highlight]-->
  <branchMissions>
    <branch>/Deny_Branch.xml</branch> <!--[!code highlight]-->
  </branchMissions>
  ...
  <email>
    <sender>CSEC Hub Services</sender>
    <subject>甲虫计划</subject>
    <body>...
回复"deny"(放弃), 你就可以放弃这项任务. 
...</body>
    ...
  </email>
</mission>
```

```xml [Deny_Branch.xml]
<mission id="pacemakerSetReplyBranch">
  <goals>
    <goal type="getstring" target="deny"/> <!--[!code highlight]-->
  </goals>
  ...
  <nextMission>/Deny_Reply.xml</nextMission> <!--[!code highlight]-->
  ...
</mission>
```
```xml [Deny_Reply.xml]
<mission id="bitHubSet01" activeCheck="true">
  ...
  <email>
    <sender>CSEC Hub Services</sender>
    <subject>Re: 甲虫计划</subject>
    <body>
我们完全能理解. 
感谢你抽出宝贵的时间. 
让你在这件事上慎重考虑了那么久, 真是麻烦你了. 
-CSEC 管理员
    </body>
    ...
  </email>
</mission>
```

```xml [BitAdv_Intro.xml]
<mission id="bit02_Intro">
  ...
  <email>
    <sender> V </sender>
    <subject>Bit -- 初章</subject>
    ...
  </email>
</mission>
```
:::

