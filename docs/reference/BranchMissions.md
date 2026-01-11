# BranchMissions （分支任务功能）

教程见 [教程：BranchMissions](../extension-tutorial/BranchMissions.md)

BranchMissions 用于关联分支任务。

BranchMissions 在 Mission 中的 XML 结构如下：

```xml
<mission id="hubSet09">
  ...  
  <branchMissions>
    <branch>/Missions/BranchMission1.xml</branch>
    <branch>/Missions/BranchMission2.xml</branch> 
  </branchMissions>
  ...
</mission>
```

```xml
<branch>/Missions/BranchMission1.xml</branch>
```
用于描述该 Mission 关联的 Branch。`<branch>` 元素是 `BranchMissions` 的子元素。
- 内容：Branch 的路径。
