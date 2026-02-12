# MissionFunction / Function

Function 也可以 实时改变游戏中的部分内容。

Function 通过 Mission 中的 [`missionStart`](./Mission.md#missionstart) 或 [`missionEnd`](./Mission.md#missionend) 元素、或 Action [RunFunction](./Action.md#runfunction) 来使用。本章的所有 Function 使用示范均使用 Action [RunFunction](./Action.md#runfunction) 来演示。


参数的传递方法有在 Function 名称后面跟 `:[文本]` 和传递 值 使用。以下为使用文本参数和值参数的例子：
```xml
<!-- 值 参数 -->
<RunFunction FunctionName="changeSong" FunctionValue="2"/>
<!-- 文本 参数 -->
<RunFunction FunctionName="setFaction:Entropy"/>
```

有理由认为 Function 最早是用来方便给 Mission 加功能的，因为游戏中有一部分 Function 都是给 Hacknet 本体使用的（不是为 Extension 准备的），而且在 Hacknet 的源码中相关类就叫 `MissionFunctions` 。

参考：[MissionFunctions.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/MissionFunctions.cs)

## 所有公开 Function

这里的“公开 Function”是指在 Hacknet 官方的 IntroExtension 中列举的所有 Function。在 Extension 中可以正常使用。

部分 Function 需要玩家安装了 Labyrinth DLC 才能使用，在此使用 <Badge type="info" text="Labyrinth" /> 提示。

### `setFaction`

```xml
<RunFunction FunctionName="setFaction:Entropy"/>
```
将玩家的 Faction 设置为指定的 Faction。
- 文本参数：指定的 Faction 的 ID。

### `addRank`

```xml
<RunFunction FunctionName="addRank" FunctionValue="2"/>
```
给玩家当前的 Faction 增加 Rank。会发一个报告邮件。
- 值参数：增加的 Rank 值。

### `addRankSilent`

```xml
<RunFunction FunctionName="addRankSilent" FunctionValue="2"/>
```
同 [`addRank`](#addrank)，但是不会发报告邮件。
- 值参数：增加的 Rank 值。

### `addRankFaction`

```xml
<RunFunction FunctionName="addRankFaction" FunctionValue="2"/>
```
给指定的 Faction 增加 Rank。会发一个报告邮件。
- 文本参数：指定的 Faction 的 ID。
- 值参数：增加的 Rank 值。

### `addFlags`

```xml
<RunFunction FunctionName="addFlags:flag1,flag2"/>
```
添加 Flags。
- 文本参数：Flags 名称。多个 flags 之间用 `,` 分隔。

### `removeFlags`

```xml
<RunFunction FunctionName="removeFlags:flag1,flag2"/>
```
移除 Flags。
- 文本参数：Flags 名称。多个 flags 之间用 `,` 分隔。

### `changeSong`

```xml
<RunFunction FunctionName="changeSong" FunctionValue="2"/>
```
改变当前播放的歌曲，用于播放 Hacknet 本体自带 BGM。
- *值参数*?：歌曲的 ID。填不存在的或者不填则使用默认歌曲。

ID 与 歌曲文件名 关系如下。歌曲的文件路径在 `Hacknet/Content/Music/[文件名].ogg`。

| ID | 文件名 |
| ------- | -------- |
| 默认 | `Revolve` |
| `2` | `The_Quickening` |
| `3` | `TheAlgorithm` |
| `4` | `Ryan3` |
| `5` | `Bit(Ending)` |
| `6` | `Rico_Puestel-Roja_Drifts_By` |
| `7` | `out_run_the_wolves` |
| `8` | `Irritations` |
| `9` | `Broken_Boy` |
| `10` | `Ryan10` |
| `11` | `tetrameth` |

### `loadConditionalActions`

```xml
<RunFunction FunctionName="loadConditionalActions:Actions/MyConditionalActions.xml"/>
```
加载 ConditionalActions。
- 文本参数：ConditionalActions 文件的路径。

### `setHubServer`

```xml
<RunFunction FunctionName="setHubServer:hubComp"/>
```
设置 HubServer。会改变该节点在 netmap 中的图标。只能设置一个。
- 文本参数：Computer ID。

### `setAssetServer`

```xml
<RunFunction FunctionName="setAssetServer:assetComp"/>
```
设置 AssetServer。会改变该节点在 netmap 中的图标。只能设置一个。
- 文本参数：Computer ID。

### `playCustomSong`

```xml
<RunFunction FunctionName="playCustomSong:Musics/CustomSong.ogg"/>
```
渐进播放自定义歌曲。歌曲类型必须是 `OGG Vorbis`。
- 文本参数：歌曲文件的路径。

> [!IMPORTANT]
> 游戏使用 XNA branch 时无法使用。


### `playCustomSongImmediatley`

```xml
<RunFunction FunctionName="playCustomSongImmediatley:Musics/CustomSong.ogg"/>
```
立即播放自定义歌曲。歌曲类型必须是 `OGG Vorbis`。
- 文本参数：歌曲文件的路径。

> [!IMPORTANT]
> 游戏使用 XNA branch 时无法使用。

> [!WARNING]
> 是错误拼写 `Immediatley` 而不是 `Immediately`。

### `changeSongDLC` <Badge type="info" text="Labyrinth" />

```xml
<RunFunction FunctionName="changeSongDLC" FunctionValue="2"/>
```

改变当前播放的歌曲，用于播放 Hacknet Labyrinth DLC 自带 BGM。
- *值参数*?：歌曲的 ID。填不存在的或者不填则使用默认歌曲。

ID 与 歌曲文件名 关系如下。歌曲的文件路径在 `Hacknet/Content/DLC/Music/[文件名].ogg`。

| ID | 文件名 |
| ------- | -------- |
| 默认 | `Remi2` |
| `2` | `snidelyWhiplash` |
| `3` | `Slow_Motion` |
| `4` | `World_Chase` |
| `5` | `HOME_Resonance` |
| `6` | `Remi_Finale` |
| `7` | `RemiDrone` |
| `8` | `DreamHead` |
| `9` | `Userspacelike` |
| `10` | `CrashTrack` |

## 非公开 Fucntion

Hacknet 也有很多 主线/DLC 专用 Function，他们很多是给Hacknet主线/DLC使用的专用功能，使用他们也可能会有条件。

参考：[MissionFunctions.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/MissionFunctions.cs)
