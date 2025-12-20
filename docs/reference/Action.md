# Action（行为）


Action 可以 实时改变游戏中的部分内容。

在 Hacknet Extension 中有两种方法使用 Action：
- 通过 ConditionalAction
- 通过 Faction

> [!NOTE]
> ConditionalActions 与 Action 都可以被称为 Action。Hacknet.wiki 认为 Action 是 ConditionalActions 的一部分。为了以示区别，方便理解他们之间的关系，本章节均不会使用 Action 来代指 ConditionalActions。

## Delay

部分 Action 可以通过设置 `Delay` 和 `DelayHost` 延迟执行。DelayHost 是任意一个拥有 `FastActionHost` Daemon 的 Node。
除了 Action `AddIRCMessage` 之外，所有可以延迟执行的 Action 都需要借助 DelayHost 延迟执行。

示范中包含了 `Delay` 和 `DelayHost` 的 Action 是可以延迟执行的 Action。

## 所有 Action

### `LoadMission`

```xml
<LoadMission MissionName="Missions/MyMission.xml"/>
```

加载一个 Mission
- `MissionName`：`string`，Mission 的路径。
参考：[SALoadMission.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SALoadMission.cs)

```xml
<AddConditionalActions Filepath="Actions/NextAction.xml" DelayHost="delayNode" Delay="0"/>
```
加载 ConditionalActions。
- `Filepath`：`string`，ConditionalActions 的文件路径。

### `RunFunction`

```xml
<RunFunction FunctionName="changeSong" FunctionValue="2" DelayHost="delayNode" Delay="1.0"/>
```

运行一个 Function
- `FunctionName`：`string`，Function 的名称。
- *`FunctionValue`*?：`string`，Function 的参数。
- *`DelayHost`*?：`string`，延迟执行的 Host。
- *`Delay`*?：`float`，延迟执行的时间。默认值为 `0.0`。

参考：[SARunFunction.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SARunFunction.cs)

### `AddAsset`

```xml
<AddAsset FileName="test" FileContents="test" TargetComp="playerComp" TargetFolderpath="home"/>
```
向目标 Nodes 添加一个 Asset
- `FileName`：`string`，Asset 的文件名。
- `FileContents`：`string`，Asset 的内容。
- `TargetComp`：`string`，目标 Nodes 的 Component。
- `TargetFolderpath`：`string`，目标 Nodes 的文件夹路径。

> [!IMPORTANT]
> Hacknet 不会判断 `FileName` 或 `FileContents` 是否存在。`FileName` 或 `FileContents` 没填会导致 `NullReferenceException`。

参考：[SAAddAsset.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SAAddAsset.cs)

### `AddMissionToHubServer`

```xml
<AddMissionToHubServer MissionName="Missions/MyMission.xml" HubServerComp="missionHub" AssignmentTag="Kaguya" StartsComplete="true"/>
```
将一个 Mission 添加到 HubServer
- `MissionName`：`string`，Mission 的文件路径。
- `HubServerComp`：`string`，HubServer 的 ComputerID。
- *`AssignmentTag`*?：`string`，分配Tag。如果是给 MissionHub 添加任务，用 `"top"` 就会使任务置顶。给 DHS 添加，就会提示分配给了谁。
- *`StartsComplete`*?：`bool`，是否开始完成。默认值为 `false`。

> [!NOTE]
> HubServer 是拥有 `missionListingServer`, `missionHubServer` 或 `DHSDaemon` Daemon 的 Node，在游戏中作为“任务中心”。

参考：[SAAddMissionToHubServer.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SAAddMissionToHubServer.cs)

### `RemoveMissionFromHubServer`

```xml
<RemoveMissionFromHubServer MissionFilepath="Missions/HubMission.xml" TargetComp="missionHub"/>
```
将一个 Mission 从 HubServer 移除
- `MissionFilepath`：`string`，Mission 的文件路径。
- `TargetComp`：`string`，HubServer 的 ComputerID。

> [!NOTE]
> HubServer 是拥有 `missionListingServer`, `missionHubServer` 或 `DHSDaemon` Daemon 的 Node，在游戏中作为“任务中心”。

参考：[SARemoveMissionFromHubServer.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SARemoveMissionFromHubServer.cs)

### `AddThreadToMissionBoard`

```xml
<AddThreadToMissionBoard ThreadFilepath="Docs/Thread.txt" TargetComp="elSec"/>
```
将一个 Thread 添加到 MessageBoard（虽然 Action 名称里面是 MissionBoard）。MessageBoard 服务器是拥有 `messageBoard` Daemon 的 Node。
- `ThreadFilepath`：`string`，Thread 的文件路径。
- `TargetComp`：`string`，MessageBoard 服务器的 ComputerID。

参考：[SAAddThreadToMissionBoard.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SAAddThreadToMissionBoard.cs)

### `AddIRCMessage`

```xml
<AddIRCMessage Author="Kaguya" TargetComp="ircNode" Delay="1">HI</AddIRCMessage>
```
将一条 IRC 消息发送到指定的 IRC 服务器。IRC 服务器是拥有 `IRCDaemon` 或 `DHSDaemon` Daemon 的 Node。
- *`Author`*?：`string`，消息的发送者。默认为 `""`。
- `TargetComp`：`string`，IRC 服务器的 ComputerID。
- *`Delay`*?：`float`，延迟执行的时间。默认值为 `0.0`。AddIRCMessage 不需要通过 `DelayHost` 延迟执行。

消息内容支持添加附件。

添加 note 附件：

```xml
<AddIRCMessage Author="Kaguya" TargetComp="ircNode" Delay="1">!ATTACHMENT:note#%#Note Title#%#Note Content line1
Note line 2
Note line 3</AddIRCMessage>
```

添加 link 附件：

```xml
<AddIRCMessage Author="Kaguya" TargetComp="ircNode" Delay="1">!ATTACHMENT:link#%#enemyNode#%#123.123.123.123</AddIRCMessage>
```

添加 account 附件：

```xml
<AddIRCMessage Author="Kaguya" TargetComp="ircNode" Delay="1">!ATTACHMENT:account#%#enemyNode#%#123.123.123.123#%#username#%#password</AddIRCMessage>
```

参考：[SAAddIRCMessage.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SAAddIRCMessage.cs)

### `DeleteFile`

```xml
<DeleteFile TargetComp="playerComp" FilePath="home" FileName="deleteme.txt" DelayHost="delayNode" Delay="0"/>
```
删除文件。
- `TargetComp`：`string`，目标 Node 的 ComputerID。
- `FilePath`：`string`，文件路径。
- `FileName`：`string`，文件名。

> [!IMPROTANT]
> `FilePath` 不填会导致 `NullReferenceException`。

参考：[SADeleteFile.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SADeleteFile.cs)

### `CopyAsset`

```xml
<CopyAsset DestFilePath="home" DestFileName="copycat.txt" DestComp="playerComp" SourceComp="assetNode" SourceFileName="source.txt" SourceFilePath="home/copy"/>
```
复制文件。
- `DestFilePath`：`string`，目标文件路径。
- *`DestFileName`*?：`string`，目标文件的文件名。默认用 `SourceFileName` 的值。
- `DestComp`：`string`，目标 Node 的 ComputerID。
- `SourceComp`：`string`，源 Node 的 ComputerID。
- `SourceFileName`：`string`，源文件的文件名。
- `SourceFilePath`：`string`，源文件的路径。

参考：[SACopyAsset.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SACopyAsset.cs)

### `CrashComputer`

```xml
<CrashComputer TargetComp="playerComp" CrashSource="enemyNode" DelayHost="delayNode" Delay="0"/>
```

使目标 Node 被 Forkbomb
- `TargetComp`：`string`，目标 Node 的 ComputerID。
- `CrashSource`：`string`，攻击者 Node 的 ComputerID。

> [!NOTE]
> 其实 `TargetComp` 和 `CrashSource` 都是选填，当 `TargetComp` 存在时 `CrashSource` 必填。不填 `TargetComp` 啥也不发生。

参考：[SACrashComputer.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SACrashComputer.cs)
