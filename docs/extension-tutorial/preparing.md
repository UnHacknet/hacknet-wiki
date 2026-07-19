---
outline: deep
---
# 准备工作

你需要准备：

- 一台可以运行最新版 Hacknet 的电脑。
- 一个文本编辑器。

> [!NOTE]
> 推荐使用 [Visual Studio Code/VSCode](https://code.visualstudio.com/) 来进行 Hacknet Extension 开发。它不仅能提供 XML 的高亮与语法检查，配合 [AutumnRivers/hacknet-vscode](https://github.com/AutumnRivers/hacknet-vscode) 和 [fengxu-30338/HacknetExtensionEditor](https://github.com/fengxu-30338/HacknetExtensionEditor) 插件还可以提高扩展开发效率。这两个插件需要对 Hacknet Extension 有一定了解，会在后续章节介绍，暂时不需要安装。
> 
> 你需要在 VSCode 中安装 [XML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-xml) 插件来获得 XML 语法检查等功能。

## 创建项目

### 通过 `BlankExtension` 创建项目

`BlankExtension` 是游戏自带的扩展结构模板，我们可以通过复制 `BlankExtension` 来创建一个新的 Extension 项目。

首先找到 Hacknet 游戏的根目录。如果你不清楚怎么找到它，可以查看 [Q: 如何找到 Hacknet 游戏的根目录？](../hnfaq.md#q-how-to-find-hacknet-root)。此处用 `Hacknet/` 举例。

复制 `Hacknet/Extensions/BlankExtension/` 并将其重命名（下文以 `MyFirstExtension` 为例），然后将副本中的 `EDIT_ME_ExtensionInfo.xml` 改名为 `ExtensionInfo.xml`。

```cmd
; 注：这只是 cmd 命令的示例，你可以使用自己习惯的方式来创建项目。
cd Hacknet\Extensions\
cp -r BlankExtension MyFirstExtension
cd MyFirstExtension
rename EDIT_ME_ExtensionInfo.xml ExtensionInfo.xml
```

使用 VSCode 打开 `Hacknet/Extensions/MyFirstExtension/` 目录，编辑 `ExtensionInfo.xml`：修改 `Name` 元素的内容（以下以 `MyFirstExtension` 为例），然后添加一个 `Language` 元素，内容为 `zh-cn`。

```xml
<ExtensionInfo>
  <!-- Max name length is 128 characters -->
  <Name>Blank Extension</Name> <!-- [!code del] -->
  <Name>MyFirstExtension</Name> <!-- [!code add] -->
  <Language>zh-cn</Language> <!-- [!code add] -->
  <AllowSaves>true</AllowSaves>
  
  ...
</ExtensionInfo>
```
> [!NOTE]
> 扩展的名称不能超过 128 个字符，且必须是英文字符。

（其他内容暂时保持原样）

### 验证扩展创建成功

启动 Hacknet，点击 Extensions 按钮，在扩展列表中看看是否有 `MyFirstExtension` 这个扩展。如果有，说明扩展创建成功。

打开 `MyFirstExtension`，可以看到扩展已经可以启动了。

> [!NOTE]
> 后续 `MyFirstExtension` 将成为我们的工作目录，在没有特殊说明的情况下，所有操作都在这个目录下进行。

### 修复一个 `BlankExtension` 的 bug

如果你在刚刚的扩展页面点击 `Run Verfication Tests`，会发现扩展报错了。

```
Errors Found. Writing report to Extensions/MyFirstExtension/report.txt

Load Error:
System.NullReferenceException 
 
Faction introfacnot found for setFaction action! 
```

这是因为 `BlankExtension` 有一个小 bug，我们需要手动修复它。

打开 `MyFirstExtension/Actions/StartingActions.xml` 文件。编辑第五行，将 `introfac` 改为 `startingfac`。

```xml
<ConditionalActions>
  
  <Instantly>
    <AddAsset FileName="RTSPCrack.exe" FileContents="#RTSP_EXE#" TargetComp="playerComp" TargetFolderpath="bin" />
    <RunFunction FunctionName="setFaction:introfac" FunctionValue="0" /> <!-- [!code del] -->
    <RunFunction FunctionName="setFaction:startingfac" FunctionValue="0" /> <!-- [!code add] -->
    
  </Instantly>

</ConditionalActions>
```

再次点击 `Run Verfication Tests`，扩展将不再报错。恭喜你完成了扩展的准备工作。

```
Testing...
All tests complete
O Errors Found
```

> [!NOTE]
> Verfication Tests 是确保扩展正常运行的重要工具。定期运行 `Run Verfication Tests` 可以及时发现扩展中的错误。在扩展开发中，你可能会遇到各种各样的错误，遇到时不必惊慌，根据错误提示来尝试解决即可。

## 完成

到这里，你已经完成了扩展的准备工作。接下来，你可以在 `MyFirstExtension` 目录下开始编写自己的扩展内容了。


> [!NOTE]
> 在后续内容中，我们将默认以扩展目录作为当前工作目录 (`/`)，以 `Hacknet/` 目录作为游戏根目录。
> 
> 我们可能会使用来自 `BlankExtension/` 或 `IntroExtension/` 两个内置目录的文件作为模板，它们的位置都在 `Hacknet/Extensions/` 目录下。
> 虽然本节使用的 `MyFirstExtension` 是从 `BlankExtension/` 复制而来，已包含 `IntroExtension/` 中的文件，但为防止歧义，后续内容中的模板路径将统一使用 `IntroExtension/` 来表示位置。

