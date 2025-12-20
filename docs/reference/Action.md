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
- `Filepath`：`string`，加载的 ConditionalActions 的文件路径。

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

### `LaunchHackScript`

```xml
<LaunchHackScript Filepath="Scripts/HackerScript.txt" DelayHost="delayNode" Delay="0" SourceComp="SourceComp" TargetComp="TargetComp" RequireLogsOnSource="false" RequireSourceIntact="true"/>
```
执行 HackerScript。
- `Filepath`：`string`，HackerScript 文件的路径。
- *`SourceComp`*?：`string`，攻击源 Node 的 ComputerID。
- *`TargetComp`*?：`string`，目标 Node 的 ComputerID。
- *`RequireLogsOnSource`*?：`bool`，目标 Node 是否需要在攻击源节点上留下日志。默认值为 `false`。
- *`RequireSourceIntact`*?：`bool`，攻击源 Node 系统文件 `netcfgx.dll` 是否需要完好无损。默认值为 `false`。

> [!IMPORTANT]
> 选填项的选填规则较为特殊。详情见：（WIP）HackerScript
>
> 当 HackerScript 作为立即执行的 StartingActions（ `Condition` 为 `Instantly`、不使用 Delay 或 Delay 时间为 `0`），会导致游戏内终端出现错误信息为 `Object reference not set to an instance of an object.` 的 `NullReferenceException`。

具体使用详情见：（WIP）HackerScript

参考：[SALaunchHackScript.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SALaunchHackScript.cs)


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
> Hacknet 不会判断 `FileName` 或 `FileContents` 是否存在。`FileName` 或 `FileContents` 没填会导致错误信息为 `Object reference not set to an instance of an object.` 的 `NullReferenceException`。

参考：[SAAddAsset.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SAAddAsset.cs)

### `AddMissionToHubServer`

```xml
<AddMissionToHubServer MissionName="Missions/MyMission.xml" HubServerComp="missionHub" AssignmentTag="Kaguya" StartsComplete="true"/>
```
将一个 Mission 添加到 MissionHub/DHS 的任务列表中。
- `MissionName`：`string`，Mission 的文件路径。
- `HubServerComp`：`string`，HubServer 的 ComputerID。
- *`AssignmentTag`*?：`string`，分配Tag。如果是给 MissionHub 添加任务，用 `"top"` 就会使任务置顶。给 DHS 添加，就会提示分配给了谁。
- *`StartsComplete`*?：`bool`，是否开始完成。默认值为 `false`。

> [!NOTE]
> MissionHub 是拥有 `missionListingServer` 或 `missionHubServer` Daemon 的 Node，在游戏中作为“任务中心”。DHS 此处代指有 `DHSDaemon` Daemon 的 Node。

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
将一个 Thread 添加到 MessageBoard（虽然 Action 的名称里面是 MissionBoard）。MessageBoard 服务器是拥有 `messageBoard` Daemon 的 Node。
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

### `AppendToFile`

```xml
<AppendToFile TargetComp="companyWhitelist" TargetFolderpath="Whitelist" TargetFilename="list.txt" DelayHost="delayNode" Delay="0">#PLAYER_IP#</AppendToFile>
```
向文件追加内容。
- `TargetComp`：`string`，目标 Node 的 ComputerID。
- `TargetFolderpath`：`string`，目标文件的路径。
- `TargetFilename`：`string`，目标文件的文件名。
- 内容：追加到文件的内容。

> [!IMPORTANT]
> Hacknet 没有判断 `TargetComp`, `TargetFolderpath`, `TargetFilename` 是否存在。如果这些 attributes 不存在，会导致 错误信息为 `Object reference not set to an instance of an object.` 的 `NullReferenceException`。

参考：[SAAppendToFile.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SAAppendToFile.cs)

### `DeleteFile`

```xml
<DeleteFile TargetComp="playerComp" FilePath="home" FileName="deleteme.txt" DelayHost="delayNode" Delay="0"/>
```
删除文件。
- `TargetComp`：`string`，目标 Node 的 ComputerID。
- `FilePath`：`string`，文件路径。
- `FileName`：`string`，文件名。

> [!IMPROTANT]
> `FilePath` 不填会导致错误信息为 `Object reference not set to an instance of an object.` 的 `NullReferenceException`。

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

### `KillExe`

```xml
<KillExe DelayHost="delayNode" Delay="0" ExeName="*"/>
```
结束指定进程。
- *`ExeName`*?：`string`，进程名。默认值为 `""`。`""` 和 `"*"` 都表示结束所有进程。

参考：[SAKillExe.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SAKillExe.cs)

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

### `ChangeAlertIcon`

```xml
<ChangeAlertIcon Target="mainHub" Type="irchub" DelayHost="delayNode" Delay="0"/>
```
更改 AlertIcon（右上角的图标）以及其关联的 Node。
- `Target`：`string`，关联的 Node 的 ComputerID。
- `Type`：`"mail" | "irc" | "irchub" | "board"`，AlertIcon 的类型，需要与关联的 Node 类型相同。默认值为 `""`。`""` 表示不更改 AlertIcon。

类型与关联的 Node 所使用的 Daemon 的对应关系：
| Type | Daemon |
| ---- | ------ |
| `"mail"` | `mailServer` |
| `"irc"` | `IRCDaemon` |
| `"irchub"` | `DHSDaemon` |
| `"board"` | `messageBoard` |

> [!IMPORTANT]
> Hacknet 没有判断 `Target` 是否存在。如果 `Target` 不存在，会导致错误信息为 `Object reference not set to an instance of an object.` 的 `NullReferenceException`。
> 
> Hacknet 也没有判断 Type 类型是否与关联的 Node 类型相同。如果 Type 类型与关联的 Node 类型不同，可能会导致游戏内 AlertIcon 无法正常使用。
> 
> 如果 ChangeAlertIcon 作为立即执行的 StartingActions（ `Condition` 为 `Instantly`、不使用 Delay 或 Delay 时间为 `0`），会导致错误信息为 `Object reference not set to an instance of an object.` 的 `NullReferenceException`

参考：[SAChangeAlertIcon.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SAChangeAlertIcon.cs)

### `ShowNode`

```xml
<ShowNode DelayHost="delayNode" Delay="0" Target="storageServer"/>
```
显示指定的 Node。
- `Target`：`string`，目标 Node 的 ComputerID。

参考：[SAShowNode.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SAShowNode.cs)

### `HideNode`

```xml
<HideNode DelayHost="delayNode" Delay="0" TargetComp="companySecurity"/>
```
隐藏指定的 Node。
- `TargetComp`：`string`，目标 Node 的 ComputerID。

参考：[SAHideNode.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SAHideNode.cs)

### `HideAllNodes`

```xml
<HideAllNodes DelayHost="delayNode" Delay="0"/>
```
隐藏所有 Node。

参考：[SAHideAllNodes.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SAHideAllNodes.cs)

### `SwitchToTheme`

```xml
<SwitchToTheme ThemePathOrName="Themes/ExampleTheme.xml" FlickerInDuration="2.0" DelayHost="delayNode" Delay="0"/>
```
切换到指定的主题，可以有新旧主题来回交替的闪烁效果。
- *`ThemePathOrName`*?：`string`，主题的路径或名称。默认为默认主题。
- *`FlickerInDuration`*?：`float`，主题切换时的闪烁时间。默认值为 `2.0`。

主题名称见：（WIP）Theme.md

参考：[SASwitchToTheme.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SASwitchToTheme.cs)

### `SetLock`

```xml
<SetLock DelayHost="delayNode" Delay="0" Module="terminal" IsLocked="true" IsHidden="false"/>
```
设置 Hacknet 指定 UI 模块的锁定状态。
- `Module`：`"terminal" | "ram" | "netmap" | "display"`，模块名。
- *`IsLocked`*?：`bool`，是否锁定。默认值为 `false`。
- *`IsHidden`*?：`bool`，是否隐藏。默认值为 `false`。

参考：[SASetLock.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SASetLock.cs)

### `StartScreenBleedEffect`

```xml
<StartScreenBleedEffect AlertTitle="Sequencer Attack" CompleteAction="Actions/ScreenBleedFailed.xml" TotalDurationSeconds="200" DelayHost="delayNode" Delay="0">Break into the Moonshine servers
Delete all files and backups
Get out of there!</StartScreenBleedEffect>
```
开始 `ScreenBleed` 效果。与紧急恢复模式下的相似效果互不干扰。
- `AlertTitle`：`string`，提示标题。在 Hacknet 中显示的字体的小写字母是大学字母的左右翻转版本。
- *`CompleteAction`*?：`string`，`ScreenBleed` 结束后加载的 ConditionalActions 的文件路径。被 Action `CancelScreenBleedEffect` 取消时不会加载。
- *`TotalDurationSeconds`*?：`float`，总持续时间（秒）。默认值为 `200`。
- 内容：左下角的提示内容。最多三行。

> [!IMPORTANT]
> 没填 `AlertTitle` 会导致游戏黑屏。

参考：[SAScreenBleedEffect.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SAScreenBleedEffect.cs)

### `CancelScreenBleedEffect`
```xml
<CancelScreenBleedEffect DelayHost="delayNode" Delay="0"/>
```
取消 `ScreenBleed` 效果。

参考：[SACancelScreenBleedEffect.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SACancelScreenBleedEffect.cs)

### `GivePlayerUserAccount`

```xml
<GivePlayerUserAccount DelayHost="delayNode" Delay="0" TargetComp="teamHub" Username="#PLAYERNAME#"/>
```
给予玩家某节点的账号。可以在登录页面直接使用。
- `TargetComp`：`string`，目标 Node 的 ComputerID。
- `Username`：`string`，用户名。

参考：[SAGivePlayerUserAccount.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SAGivePlayerUserAccount.cs)

### `ChangeIP`

```xml
<ChangeIP  DelayHost="delayNode" Delay="0" TargetComp="finalNode" NewIP="123.123.123.123"/>
```
更改指定 Node 的 IP 地址。
- `TargetComp`：`string`，目标 Node 的 ComputerID。
- *`NewIP`*?：`string`，新的 IP 地址。如果不填、为空或者以`#RANDOM`开头，会随机生成一个 IP 地址。

参考：[SAChangeIP.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SAChangeIP.cs)

### `SaveGame`

```xml
<SaveGame DelayHost="delayNode" Delay="0"/>
```
保存游戏。

参考：[SASaveGame.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SASaveGame.cs)
