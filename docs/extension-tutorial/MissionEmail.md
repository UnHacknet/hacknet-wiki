# MissionEmail

Mission 开始时会发送邮件。如果是从 DHS 领取的任务，Email 内容则会变成 DHS 中显示的任务详情。

```xml
<mission>
  ...
  <email>
    <sender>SENDER NAME HERE</sender>
    <subject>This is an example email for Blank Extension</subject>
    <body>You should add the body of the email here.
Multiple lines etc.</body>
    <attachments>
      <!-- Add attachments like links and notes here -->
    </attachments>
  </email>
</mission>
```

Hacknet 中有多种 Email，Mission 中的 Email 是其中一种。为了区分，后续会使用 MissionEmail 特指 Mission 中的 Email。

## Email 撰写

简化版 *甲虫计划* 中邮件的大致内容如下：
- 发送者：CSEC Hub Services
- 主题：甲虫计划
- 内容：你好黑客, 这次的任务很不寻常, 请谨慎对待. 回复"deny"(放弃), 你就可以放弃这项任务.

MissionEmail 内容比较简单，我们直接参照内容，根据模板格式填写即可。

简化版 *甲虫计划* 中 `<email>` 内容部分大概如下：

```xml
<email>
  <sender>CSEC Hub Services</sender>
  <subject>甲虫计划</subject>
  <body>你好黑客, 这次的任务很不寻常, 请谨慎对待. 回复"deny"(放弃), 你就可以放弃这项任务.</body>
  <attachments>
    <!-- Add attachments like links and notes here -->
  </attachments>
</email>
```

## 附件

MissionEmail 中可以添加附件。附件种类有：
- note（笔记）
- link（ip地址）
- account（账号密码）

格式如下：
```xml
<attachments>
  <note title="An example note">example note</note>
  <link comp="missionTestNode" />
  <account comp="missionTestNode" user="TestUser" pass="testpass" />
  ...
</attachments>
```

附件的格式与普通 Email 中附件相同，`<attachments>` 标签中可以包含多个 `<attachment>` 标签。

*甲虫计划* 中有两个附件：
- 一个“任务细节” note，内容是 `目标: Elliot Whit`，
- 医疗数据库 “通用医疗” 的 ip 地址。“通用医疗” 的 Computer ID 是 `medical`。

参考格式，补充附件后，简化版 *甲虫计划* 的 MissionEmail 如下：
```xml
<email>
  <sender>CSEC Hub Services</sender>
  <subject>甲虫计划</subject>
  <body>你好黑客, 这次的任务很不寻常, 请谨慎对待. 回复"deny"(放弃), 你就可以放弃这项任务.</body>
  <attachments>
    <!-- Add attachments like links and notes here --> //[!code del]
    <link comp="medical" /><!-- [!code add] -->
    <note title="任务细节">目标: Elliot Whit</note><!-- [!code add] -->
  </attachments>
</email>
```

## MissionEmail 参考

更多具体细节见 [参考：MissionEmail](../reference/MissionEmail.md)
