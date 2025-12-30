---
outline: deep
---
# 准备工作

在开发 Hacknet Extension 之前，你需要做一些准备以下内容来提高你的扩展开发效率。

- 最新版 Hacknet 与可以运行它的电脑。
- 一个文本编辑器。

> [!NOTE]
> 推荐使用 [Visual Studio Code](https://code.visualstudio.com/)，
> 因为它不仅可以做到 XML 的高亮与语法检查。
> 在**后期正式进行扩展开发的时候**也可以使用 [Hacknet-VSCode](https://github.com/AutumnRivers/hacknet-vscode) 的片段补全，或更先进的 [HacknetExtensionEditor](https://github.com/fengxu-30338/HacknetExtensionEditor) 来提高扩展开发效率。

## 创建项目

### 通过 `BlankExtension` 创建项目

`BlankExtension` 是游戏自带的扩展结构模板，我们可以通过复制 `BlankExtension` 来创建一个新的 Extension 项目。

首先找到 Hacknet 游戏的根目录。如果你不清楚怎么找到它，可以查看 [Q: 如何找到 Hacknet 游戏的根目录？](../hnfaq.md#q-how-to-find-hacknet-root)。此处用 `Hacknet/` 举例。

复制一份 `Hacknet/BlankExtension/` 并改名，将副本里面的 `EDIT_ME_ExtensionInfo.xml` 改为 `ExtensionInfo.xml`。后面内容以 `MyFirstExtension` 为例。

```cmd
; 注：这只是 bash 命令的示例，你可以使用你习惯的电脑操作逻辑来创建项目。
cd Hacknet\Extensions\
cp -r BlankExtension MyFirstExtension
cd MyFirstExtension
rename EDIT_ME_ExtensionInfo.xml ExtensionInfo.xml
```

使用 vscode 打开 `Hacknet/MyFirstExtension/` 目录。编辑 `ExtensionInfo.xml`，修改 `Name` 元素的内容；然后添加 `Language` 元素，内容为 `zh-cn`。这里以 `MyFirstExtension` 为例。

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

点开 `MyFirstExtension`，可以看到已经可以启动扩展了。

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

这是因为 `BlankExtension` 有一个小 bug，会导致扩展报错。我们需要手动修复它。

打开 `Actions/StartingActions.xml` 文件。编辑第五行，将 `introfac` 改为 `startingfac`。

```xml
<ConditionalActions>
  
  <Instantly>
    <AddAsset FileName="RTSPCrack.exe" FileContents="#RTSP_EXE#" TargetComp="playerComp" TargetFolderpath="bin" />
    <RunFunction FunctionName="setFaction:introfac" FunctionValue="0" /> <!-- [!code del] -->
    <RunFunction FunctionName="setFaction:startingfac" FunctionValue="0" /> <!-- [!code add] -->
    
  </Instantly>

</ConditionalActions>
```

再次点击 `Run Verfication Tests`，会发现扩展没有报错了。恭喜你完成了扩展的准备工作。

```
Testing...
All tests complete
O Errors Found
```

> [!NOTE]
> Verfication Tests 是确保扩展正常运行的重要工具。时不时运行 `Run Verfication Tests` 可以及时知道扩展是否有错误。在扩展开发中，你可能会遇到各种各样的错误，此时不要惊慌，如果有错误提示，请根据它来尝试解决。

## 完成

到这里，你已经完成了扩展的准备工作。接下来，你可以在 `MyFirstExtension` 目录下开始编写自己的扩展内容了。

<!--@include: ./parts/pathRule.md-->
