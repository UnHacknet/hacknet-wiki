---
outline: deep
---
# Mission （任务）

描述 Mission 的 XML 结构大致如下：
```xml
<mission id="testMission" activeCheck="true" shouldIgnoreSenderVerification="false">

  <!-- Goal -->
  <goals>...</goals>

  <!-- MissionStart/MissionEnd -->
  <missionStart val="7">changeSong</missionStart>
  <missionEnd>addRank</missionEnd>

  <!-- NextMission -->
  <nextMission IsSilent="false">NONE</nextMission>

  <!-- BranchMission -->
  <branchMissions>...</branchMissions>

  <!-- Posting -->
  <posting title="Post Title">Post Content</posting>

  <!-- Email -->
  <email>...</email>
</mission>
```

```xml
<mission id="testMission" activeCheck="true" shouldIgnoreSenderVerification="false"></mission>
```
Mission 的根元素。
- *`id`*?：`string`, 任务的标识符。似乎不填不会影响扩展正常进行。
- *`activeCheck`*?：`bool`, 是否持续检查任务状态。一般玩家尝试回复任务时才会检查任务是否完成。
- *`shouldIgnoreSenderVerification`*?：`bool`, 是否忽略发送者验证，默认 `false`。为 `true` 时，玩家可以回复任意邮件来完成任务，而不是必须是任务当前的邮件。
