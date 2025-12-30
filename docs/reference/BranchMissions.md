# BranchMissions （分支任务）

BranchMissions 用于创建分支任务，通过满足不同 BranchMission 的 Goal 来触发不同的 `nextMission`。

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
用于描述该 Mission 关联的 BranchMission。`<branch>` 元素是 `BranchMissions` 子元素。
- 内容：BranchMission 的路径。
