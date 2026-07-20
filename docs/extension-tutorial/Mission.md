# Mission （任务）

在本章节中，我们将介绍 Hacknet 中的 Mission（任务）功能。在 Hacknet 中，Mission 通过 XML 文件进行定义。

Mission 的主要作用是引导玩家完成特定操作。它由 Goal（目标）、MissionFunction（函数）、NextMission（下一个 Mission）、BranchMissions（分支 Mission）等元素组成。

本章我们将尝试逐步还原 Hacknet 中 *甲虫计划* Mission 的一个简化版本。*甲虫计划* 的 Mission 涵盖了所有 Mission 功能，你可以在下方先预览一下。

::: details *甲虫计划* 简化版
```xml
<mission id="hubSet09">
  <goals>
    <goal type="HasFlag" target="E_Whit:DEAD" />
  </goals>
  
  <missionStart val="9">changeSong</missionStart>
  <missionEnd val="1">junebugComplete</missionEnd>
  
  <nextMission>Missions/BitAdv_Intro.xml</nextMission>
  
  <branchMissions>
    <branch>Missions/PacemakerSet_Deny_Branch.xml</branch>
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
回复"deny"(放弃), 你就可以放弃这项任务. 
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
:::

## 通过模板创建一个 Mission 文件

`BlankExtension/Missions/StartingMission.xml` 是一个简单的 Mission 文件模板。这个模板内只有被注释的元素是可选的，没有被注释的元素都是必须的，不能省略。你可以在此基础上编写 Mission。

```xml
<mission id="startingMission">
  <goals>
    <!-- Goals here -->
  </goals>
  <!-- 
  Add your mission start and end items here
  missionStart val="0">loadConditionalActions:Actions/TestActions.xml</missionStart>
  missionEnd val="1">addRank</missionEnd> 
  -->
  <nextMission>NONE</nextMission>
  <!-- 
  <posting title="startingMission">This would be the post on a message board if it was on them.</posting>
  -->
  <email>
    <sender>SENDER NAME HERE</sender>
    <subject>This is an example email for Blank Extension</subject>
    <body>You should add the body of the email here.
Multiple lines etc.
</body>
    <attachments>
      <!-- Add attachments like links and notes here -->
    </attachments>
  </email>
</mission>
```

## Mission 的根元素

Mission 的根元素 `<mission>` 中属性都是非必需的。
```xml
<mission id="missionid" activeCheck="false" shouldIgnoreSenderVerification="false">
  ...
</mission>
```

Mission 的 id 没有被直接使用，即使大部分都有 `id` 属性。甲虫计划的 Mission 的 id 是 `hubSet09`。

`activeCheck` 会影响 Goal 的检查方式，在后续 Goal 会具体介绍。

`shouldIgnoreSenderVerification` 默认为 `false`。为 `true` 时，Mission 会忽略发送者验证，一般不常用。

<!--
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
``` -->
