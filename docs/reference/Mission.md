# Mission （任务）

教程见 [教程：Mission](../extension-tutorial/Mission.md)

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
- *`suppress`*?：`bool`，默认值取决于运行模式：**扩展模式下为 `true`，主游戏模式下为 `false`**。
  - ⚠️ 因此在扩展中**不写该属性等同于 `suppress="true"`**。
  - `true`：加载时仅记录、不执行，等到「激活时机」才执行，包括：
    - 通过 `nextMission` 进入的任务
    - 扩展启动时的起始任务
    - 在 MissionHubServer / MissionListingServer / DLCHubServer 等节点**接取**任务时 —— 激活由接取动作直接触发，**不以发送任务邮件为条件**（DHS 的接取不调用 `sendEmail`；另两者会调用，但是否真正发出取决于本任务的 `IsSilent`，见下文 `nextMission` 一节）
    - ⚠️ 通过 [`LoadMission`](Action.md) Action 加载的任务不在上述路径中，其 `missionStart` **不会执行**；有需要时应显式写 `suppress="false"`
  - `false`：任务文件**每次被解析时都会执行**。解析发生在任务的各种加载路径上，例如：
    - 存读档 / 新游戏时的任务加载
    - **DHS（`DLCHubServer`）每次连接**：`navigatedTo` → `ReadActiveMissions` → `MissionSerializer.restoreMissionFromFile` → 重新解析任务 XML
    - 玩家接取 DHS 任务时（`PlayerAcceptMission` 中会再次解析任务文件）
    - 注意 `MissionHubServer` / `MissionListingServer` 的任务恢复发生在 `loadInit`（随存档加载），**不随每次连接重载**
  - 因此 hub / DHS 中的任务应使用 `suppress="true"`（**扩展模式下**可省略该属性；主游戏模式下省略等同于 `false`）

::: details (官方介绍)
官方是这么介绍的：
```
If suppress is set to true, it will only activate when the mission email is sent - 
otherwise it will activate when it is loaded. This is very important to remember when 
writing missions designed for use in a hub server - those missions are loaded when the save game is loaded
or a new game is started.
```
实测补充：向 MissionHub 添加的 Mission 若**省略 `suppress` 属性**，其 `missionStart` 不会在加载时执行 —— 因为扩展模式下该属性默认为 `true`（任务被抑制，需等玩家接取时才激活）。显式写 `suppress="false"` 时，如上文所述，任务文件每次被解析都会执行。

参考：[ComputerLoader.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/ComputerLoader.cs)、[MissionSerializer.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/MissionSerializer.cs)、[ActiveMission.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/ActiveMission.cs)、[MissionHubServer.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/MissionHubServer.cs)
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
当 Mission 添加进 MissionListingServer、MissionHubServer 或 DHS 的任务列表中会显示的内容。
- *`title`*?：`string`，任务的标题。
- *`reqs`*?：`string`，描述需要满足的 flags 。多个 flags 之间用逗号 `,` 分隔。
- *`requiredRank`*?：`int`，需要达到的 Rank。如果玩家当前不属于任何 `Faction`，则无用。
- 内容：任务的描述。

如果你不写 posting 元素，任务列表中会显示这个任务标题是 `UNKNOWN`，内容是 `UNKNOWN`。

## `email`

见 [MissionEmail](MissionEmail.md)
