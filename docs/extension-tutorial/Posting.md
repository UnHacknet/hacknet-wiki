# Posting（文章）

Posting 是 Mission 中的可选部分。

## 作为任务简介

如果任务在任务中心，那么 Posting 会作为任务中心里面的任务简介。

任务中心有 MissionListingServer、MissionHubServer 和 DHS。
```xml
<mission id="startingMission">
  ...
  <posting title="startingMission">This would be the post on a message board if it was on them.</posting>
  ...
</mission> 
```

## 作为文章

如果任务是新闻服务区中的文章，那么 Posting 会作为文章的内容。

```xml
<mission> <goals></goals> <nextMission>NONE</nextMission>
<posting title="New Macrosoft Phone: About as bad as you expecte">巨硬公司发布新款手机 : 要多烂有多烂

看起来巨硬公司的开发脚步根本停不下来. 我们的员工有幸得到一台最新的样品机"Waterfall", 然而经过我们的测试, 已经发现了很多严重的安全漏洞. 
</posting>
<email> <sender></sender> <subject></subject> <body></body> <attachments> </attachments> </email> </mission>
```

新闻服务器其实是 VariableMissionListingServer，在 Hacknet 本体中 Slashbot 新闻服务器和 Kellis 帮助服务器就是 VariableMissionListingServer。
