# Mission （任务）

在本章节中，我们将介绍 Hacknet 中的 Mission（任务）功能。Mission 的主要用途是去引导玩家做一些事情。

在 Hacknet 中，Mission 通过 XML 文件来定义。

这是 Hacknet 中 *甲虫计划* 的简化版本。*甲虫计划* 的 Mission 涵盖了所有 Mission 功能，本章节我们通过相关任务来了解 Mission 的基本结构与用法。
```xml
<mission id="hubSet09">
  <goals>
    <goal type="HasFlag" target="E_Whit:DEAD" />
  </goals>
  
  <missionStart val="9">changeSong</missionStart>
  <missionEnd val="1">junebugComplete</missionEnd>
  
  <nextMission>BitAdv_Intro.xml</nextMission>
  
  <branchMissions>
    <branch>PacemakerSet_Deny_Branch.xml</branch>
  </branchMissions>
  
  <posting title="甲虫计划" reqs="dechead, decypher,csecRankingS2Pass">
这是一项极其棘手的任务, 我们需要一位能为自己的行为负责的, 在外活动的, 资深的匿名黑客, 使用极端手段来帮助一位痛不欲生的人. 
  </posting>
  
  <email>
    <sender>CSEC Hub Services</sender>
    <subject>甲虫计划</subject>
    <body>
你好黑客, 
这次的任务很不寻常, 请谨慎对待. 
    </body>
    <attachments>
      <link comp="medical" />
      <note title="任务细节">
目标: Elliot Whit
</note>
    </attachments>
  </email>
</mission>
```

后面会对 Mission 进行大概结构。简单内容会大致介绍，复杂内容会在后面具体解释。

## `Mission` 根元素

Mission 的根元素。 
```xml
<mission id="hubSet09">
  ...
</mission>
```

## Goal（目标）

Goal 用于定义任务完成的目标。在后面 [Goal](./Goal.md) 中会具体介绍。

```xml
<goals>
  <goal type="HasFlag" target="E_Whit:DEAD" />
</goals>
```

## MissionFunction 

MissionFunction/Function 功能可以在任务开始和结束后执行，可以改变游戏的一些状态，在后面 [MissionFunction](./MissionFunction.md) 中会具体介绍。

```xml
<missionStart val="9">changeSong</missionStart>
<missionEnd val="1">junebugComplete</missionEnd>
```

## NextMission

记录该 Mission 完成后的下一个 Mission。

```
<nextMission>BitAdv_Intro.xml</nextMission>
```

## BranchMissions

任务分支功能，让一个任务可能有多种结果。在后面 [BrachMissions](./BranchMissions.md) 中会具体介绍。

```xml
<branchMissions>
  <branch>PacemakerSet_Deny_Branch.xml</branch>
</branchMissions>
```

## Posting

当 Mission 放在任务中心时显示的介绍。

```xml
<posting title="甲虫计划" reqs="dechead, decypher,csecRankingS2Pass">
这是一项极其棘手的任务, 我们需要一位能为自己的行为负责的, 在外活动的, 资深的匿名黑客, 使用极端手段来帮助一位痛不欲生的人. 
</posting>
```

## Email

Mission 开始时发送的邮件。Hacknet 中有多种 Email，Mission 中的 Email 是其中一种。为了区分，使用 MissionEmail 特指 Mission 中的 Email。

如果是从 `DHS` 领取的任务，Email 内容则会变成 `DHS` 中显示的任务详情。

具体写法见 [参考：MissionEmail](../reference/MissionEmail.md)

```xml
<email>
  <sender>CSEC Hub Services</sender>
  <subject>甲虫计划</subject>
  <body>
你好黑客, 
这次的任务很不寻常, 请谨慎对待. 
  </body>
  <attachments>
    <link comp="medical" />
    <note title="任务细节">
目标: Elliot Whit
</note>
  </attachments>
</email>
```
