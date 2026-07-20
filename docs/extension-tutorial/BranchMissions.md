# BranchMissions（分支任务功能）

BranchMissions 让一个任务可以产生多种结果——当满足不同 Goal(s) 时，跳转到不同的 `nextMission`。

以下以 Hacknet 中的*甲虫计划*为例（已简化非关键内容与任务路径）：
::: code-group

```xml [HubSet09.xml]
<mission id="hubSet09">
  <goals>
    <goal type="HasFlag" target="E_Whit:DEAD" /> <!--[!code highlight]-->
  </goals>
  ...
  <nextMission>Missions/BitAdv_Intro.xml</nextMission> <!--[!code highlight]-->
  <branchMissions>
    <branch>Missions/Deny_Branch.xml</branch> <!--[!code highlight]-->
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
  <nextMission>Missions/Deny_Reply.xml</nextMission> <!--[!code highlight]-->
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
*甲虫计划*中有两种走向：

| Goal | NextMission |
| :--- | :--- |
| 获得 flag `E_Whit:DEAD` | “Bit -- 初章” |
| 回复 `deny` | “Re: 甲虫计划” |

相比不设分支时只需一个 Mission，现在每增加一种结果就需要多写一个 Branch Mission。

> [!NOTE]
> 为了防止歧义，此处 BranchMissions 只指这个功能。

## 通过 Branch（分支）为不同 Goal(s) 设置不同 NextMission

BranchMissions 的本质是：同时加载多个 Mission，满足其中某个任务的 Goal(s) 时，使用该任务的 `nextMission`。

Branch 便是用于记录次要 Goal(s) 与对应 `nextMission` 的特殊 Mission。每需要一种新的 Goal 组合，就需要多一个 Branch。

只取*甲虫计划*相关 Mission 的文件名（比 ID 更易识别）、Goal 与 NextMission，整理如下：

| 文件名 | Goal's type | Goal's target | NextMission |
| --- | --- | --- | --- |
| HubSet09.xml | HasFlag | `E_Whit:DEAD` | BitAdv_Intro.xml |
| BitAdv_Intro.xml |...|...|...|
| Deny_Branch.xml | GetString | `deny` | Deny_Reply.xml |
| Deny_Reply.xml |...|...|...|

可以看到，获得 flag 的 Goal 写在 HubSet09.xml 里面，而回复的 Goal 写在 Deny_Branch.xml 里面。

```xml
<nextMission>Missions/BitAdv_Intro.xml</nextMission> 
<branchMissions>
  <branch>Missions/Deny_Branch.xml</branch> 
</branchMissions>
```
Deny_Branch.xml 作为 HubSet09.xml 的 Branch，让两个不同的 Goal 在同一个任务中共存，各自对应不同的 NextMission。

## 关于对相关 Mission 的称呼建议

建议用以下方法称呼相关的不同 Mission，以防止歧义：
- Main Mission：主任务
- Branch：分支任务
- Main Mission's NextMission：主任务的下一个任务
- Branch's NextMission：分支任务的下一个任务
- BranchMissions：分支任务功能

BranchMissions 究竟指 Branch，还是指 Branch's NextMission？为避免混淆，建议将 BranchMissions 限定为"分支任务功能"这一整体概念。
