# BranchMissions（分支任务功能）

BranchMissions 可以让一个任务有多种结果。通过 BranchMissions 可以让 Mission 在满足不同 Goal(s) 的时候，使用不同的 `nextMission`。

在 Hacknet 中，*甲虫计划*就是一个简单的示范（我们简化了不重要的内容）：
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
*甲虫计划*中，如果玩家成功使心脏起搏器故障（表现为获得 flag `E_Whit:DEAD`），则发送初章邮件进入 Bit 初章。如果回复 `deny`，则发送感谢邮件：

| Goal | NextMission |
| :--- | :--- |
| 获得 flag `E_Whit:DEAD` | “Bit -- 初章” |
| 回复 `deny` | “Re: 甲虫计划” |

你会发现虽然相比于不写 deny 任务，多一个不同结果需要写两个 Mission。

> [!NOTE]
> 为了防止歧义，此处 BranchMissions 只指这个功能。

## 通过 Branch（分支）为不同 Goal(s) 设置不同 NextMission

BranchMissions 功能的本质是：不同 Goal(s) 对应不同 NextMission。

Branch 便是用于记录次要 Goal(s) 与对应 NextMission 的特殊 Mission。每需要一种新的 Goal 组合，就需要多一个 Branch。

只取*甲虫计划*相关 Mission 的文件名（因为比 ID 好辨别）、Goal 与 NextMission，得到以下表格：

| 文件名 | Goal's type | Goal's target | NextMission |
| --- | --- | --- | --- |
| HubSet09.xml | HasFlag | `E_Whit:DEAD` | BitAdv_Intro.xml |
| BitAdv_Intro.xml |...|...|...|
| Deny_Branch.xml | GetString | `deny` | Deny_Reply.xml |
| Deny_Reply.xml |...|...|...|

可以看到，获得 flag 的 Goal 写在 HubSet09.xml 里面，而回复的 Goal 写在 Deny_Branch.xml 里面。

```xml
<nextMission>/BitAdv_Intro.xml</nextMission> 
<branchMissions>
  <branch>/Deny_Branch.xml</branch> 
</branchMissions>
```
Deny_Branch.xml 作为 HubSet09.xml 的 Branch，让这两个不同的 Goal 同时进行，且对应不同的 NextMission。

## 关于对相关 Mission 的称呼建议

建议用以下方法称呼相关的不同 Mission，以防止歧义：
- Main Mission：主任务
- Branch：分支任务
- Main Mission's NextMission：主任务的下一个任务
- Branch's NextMission：分支任务的下一个任务
- BranchMissions：分支任务功能

BranchMissions 到底指的是 Branch 还是 Branch's NextMission？不好说，故建议让 BranchMissions 只指这个功能。
