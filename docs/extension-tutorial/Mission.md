# Mission （任务）

在本章节中，我们将介绍 Hacknet 中的 Mission（任务）功能。Mission 的主要用途是去引导玩家做一些事情。

玩家在 Hacknet 主线接到的第一封邮件——来自 Bit 的 *初次联系*，便是一个 Mission。

在 Hacknet 中，Mission 通过 XML 文件来定义。

这就是简化后的 *初次联系* 任务的 XML 文件内容。在本章，我们通过这个文件来了解 Mission 的基本结构与用法。
```xml
<mission id="bitMissionIntro">
  <goals>
    <goal type="filedeletion" target="playerComp" file="SecurityTracer.exe" path="bin" />
  </goals>
  <nextMission>SSHCrackMission.xml</nextMission>
  <email>
    <sender>Bit</sender>
    <subject>初次联系</subject>
    <body>
连接到你自己的节点(在网络图中的绿色节点), 然后找到并删除"SecurityTracer.exe". 
-Bit</body>
    <attachments>
      <note title="Hacknet操作指南">操作指南
使用"rm [文件名]"以删除文件</note>
    </attachments>
  </email>
</mission>
```

