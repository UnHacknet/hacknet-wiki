# MissionEmail

任务邮件。

任务被加载时一般会发送一条邮件给玩家，玩家通过回复这条邮件来完成任务。如果是从 `DHS` 领取的任务，则会变成 `DHS` 中显示的任务详情。


任务邮件在 `<email>` 标签中定义。XML 大致结构如下：

```xml
<mission>
  ...

  <email>
    <sender>SomeSender</sender>
    <subject>I'm Subject</subject>
    <body>I'm Body</body>

    <attachments>
      <note title="An example note">example note</note>
      ...
    </attachments>
  </email>
  
</mission>
```

- `<sender>`内容：发件人

- `<subject>`内容：主题

- `<body>`内容：正文

## `attachments`

附件。

```xml
<attachments>
  <note title="An example note">example note</note>
  <link comp="missionTestNode" />
  <account comp="missionTestNode" user="TestUser" pass="testpass" />
  ...
</attachments>
```

### `note`

```xml
<note title="An example note">example note</note>
```
Note 附件，玩家可以快捷把内容添加到 Notes 中。
- `title`：`string`, Note 标题。
- 内容：Note 内容。

### `link`

```xml
<link comp="missionTestNode" />
```
IP 附件，玩家可以快捷将对应 Node 添加到 Netmap 中。
- `comp`：`string`, Computer ID。

### `account`
```xml
<account comp="missionTestNode" user="TestUser" pass="testpass" />
```
Account 附件，添加后在该 Node 中的登陆界面会有对应的账号信息，可以一键登录。
- `comp`：`string`, Computer ID。
- `user`：`string`, 用户名。
- `pass`：`string`, 账密码。
