---
outline: deep
---
# Mission （任务）

描述 Mission 的 XML 结构大致如下：
```xml
<mission id="testMission" activeCheck="true" shouldIgnoreSenderVerification="false">

  <!-- Goal -->
  <goals>...</goals>

  <!-- MissionStart & MissionEnd -->
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

> [!NOTE]
> 不要修改 `<mission>` 元素 的 子元素 的顺序。

```xml
<mission id="testMission" activeCheck="true" shouldIgnoreSenderVerification="false"></mission>
```
Mission 的根元素。
- *`id`*?：`string`, 任务的标识符。似乎不填不会影响扩展正常进行。
- *`activeCheck`*?：`bool`, 是否持续检查任务状态。一般玩家尝试回复任务时才会检查任务是否完成。
- *`shouldIgnoreSenderVerification`*?：`bool`, 是否忽略发送者验证，默认 `false`。为 `true` 时，玩家可以回复任意邮件来完成任务，而不是必须是任务当前的邮件。

## `goals`

见 [Goal](Goal.md)

## *`missionStart`*? <Badge type="info" text="Optional" />

```xml
<missionStart val="7" suppress="true">changeSong</missionStart>
```
任务被加载后执行的 Function。不使用可以把 `<missionStart>` 元素删除。
- *`val`*?：`int`，Function 的参数。默认值为 `0`。
- *`suppress`*?：`bool`，默认值为 `false`。`suppress` 为 `true` 时通过 `LoadMission` Action 加载的 Mission 的 `missionStart` 不会被执行，只有通过 Mission 的 `nextMission` 加载的任务的 missionStart 才会执行。`false` 时可能会多次执行（存读档）

::: details (官方介绍)
官方是这么介绍的：
```
If suppress is set to true, it will only activate when the mission email is sent - 
otherwise it will activate when it is loaded. This is very important to remember when 
writing missions designed for use in a hub server - those missions are loaded when the save game is loaded
or a new game is started.
```
但是实践证明，添加到 MissionHub 的 Mission 的 `missionStart` 在 `suppress` 为 `false` 时也没有被执行。
:::


## *`missionEnd`*? <Badge type="info" text="Optional" />

```xml
<missionEnd val="1">addRank</missionEnd>
```
任务完成后执行的 Function。不使用可以把 `<missionEnd>` 元素删除。
- *`val`*?：`int`，函数的参数。默认值为 `0`。

## `nextMission` 

```xml
<nextMission IsSilent="false">Missions/NextMission.xml</nextMission>
```
任务完成后加载的下一个 Mission。
- *`IsSilent`*?：`bool`，默认值为 `false`。`true` 时 **当前** Mission 加载的时候不会发送邮件，而不是下一个 Mission。

> [!IMPORTANT]
> `IsSilent` 为 `true` 时 **当前** Mission 加载的时候不会发送邮件，而不是下一个 Mission。

## `branchMissions`

见 [BranchMissions](BranchMissions.md)

## *`posting`*? <Badge type="info" text="Optional" />

```xml
<posting title="Do the Extension Test Mission" reqs="Flags1,Flags2" requiredRank="3" >
This is the body text of the posting that will appear when the mission is clicked on. It should contain a basic outline, with any warnings the player needs.
Once accepted, the email should contain full details.
</posting>
```
当 Mission 添加进 MissionHub 时，在 MissionHub 的任务列表中会显示的内容。
- *`title`*?：`string`，任务的标题。
- *`reqs`*?：`string`，描述需要满足的标志位。多个标志位之间用逗号 `,` 分隔。
- *`requiredRank`*?：`int`，需要达到的 Rank。如果玩家当前不属于任何 `Faction`，则无用。
- 内容：任务的描述。

如果你不写 posting 元素，任务列表中会显示这个任务标题是 `UNKNOWN`，内容是 `UNKNOWN`。

## `email`

见 [MissionEmail](MissionEmail.md)
