# Docs （文档）
该部分分为两类

1.贴吧论坛

2.新闻板

两种各有不同
## 1.贴吧论坛
```text
polarSnake
------------------------------------------
#Sun

> 103.31.7.34

你们有没有见过这个服务器? 这到底是什么玩意? 
这些试炼服务器看起来还是挺正常的, 有谁知道通过试炼后会怎么样吗? 
------------------------------------------
> 103.31.7.34
>这些试炼服务器看起来是挺合法的
什么试炼? 这不就是个网站吗? 
------------------------------------------
>就是个网站
...

```
以上为我们之前见过的el论坛的相关内容
我们可以发现不同的内容用分隔符划开
经过小A的计算，共有42个"-"
> [!WARING]

> 1.必须是42个，多一个少一个都不行

> 2.最顶上不能加分隔符，否则会出现点击定向错误

## 2.新闻板
```xml
<?xml version = "1.0" encoding = "UTF-8" ?>
<mission id="xxx" activeCheck="false" shouldIgnoreSenderVerification="false">
    <goals>NONE</goals>

    <missionStart val="3">NONE</missionStart>
    <missionEnd>NONE</missionEnd>

    <nextMission IsSilent="false">NONE</nextMission>

    <posting title="标题">内容</posting>

    <email>
        <sender></sender>
        <subject></subject>
        <body></body>
        <attachments>
        </attachments>
    </email>
</mission>
```

这时候就有问题了
> 这不就是Missions咩？

说对喽，就是没有任务的Missions
相关内容和标题已经标注了，其他的都写成NONE/空着不写即可

```xml
<?xml version = "1.0" encoding = "UTF-8" ?>
<mission id="BN1" activeCheck="false" shouldIgnoreSenderVerification="false">
    <goals>NONE</goals>

    <missionStart val="3">NONE</missionStart>
    <missionEnd>NONE</missionEnd>

    <nextMission IsSilent="false">NONE</nextMission>

    <posting title="匿名黑客组织攻破电网控制系统，多地短暂停电">一群自称“夜光”的黑客组织昨日声称造成某地的间歇性停电。他们在暗网发布了一份技术报告，详细描述了如何利用老旧变电站的漏洞远程切断断路器。国家电网发言人表示已启动应急响应，目前所有系统已恢复运行，但尚未回复其他相关问题。</posting>

    <email>
        <sender></sender>
        <subject></subject>
        <body></body>
        <attachments>
        </attachments>
    </email>
</mission>
```
比如以上内容就是一个经典的新闻板，还有我们之前在Slash-Bot新闻板和网络教育档案馆见过的那种样式

