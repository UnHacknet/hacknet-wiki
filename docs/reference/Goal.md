---
outline: deep
---
# Goal （目标）

Goal 描述 Mission 的完成条件。

所有 Goal 都是 `<goals>` 的子元素。XML 结构示范如下：

```xml
<mission>
  
  <goals>
    <!-- Goal -->
    <goal type="clearfolder" target="advExamplePC" path="home"/>
    <goal type="delay" time="10.0"/>
    ...
  </goals>

  ...
</mission>
```

不使用 Goal 可以留空：
```xml
<goals></goals>
```

## 所有 Goal

所有 Goal 都有 `type` 属性，类型为 `string`，用于表示 Goal 的类型。

### `FileDeletion`

```xml
<goal type="filedeletion" target="advExamplePC" file="asdf.txt" path="home"/>
```
删除目标文件。目标文件必须存在。
- `target`：`string`, 目标 Node 的 Computer ID。
- `file`：`string`, 目标文件的路径。
- `path`：`string`, 目标文件所在目录。

### `FileDownload`

```xml
<goal type="filedownload" target="advExamplePC" file="downloadFile.txt" path="home"/>
```
下载目标文件。目标文件必须存在。
- `target`：`string`, 目标 Node 的 Computer ID。
- `file`：`string`, 目标文件的路径。
- `path`：`string`, 目标文件所在目录。

### `FileChange`

```xml
<goal type="filechange" target="advExamplePC" file="changeFile.txt" path="home" keyword="data" removal="true" caseSensitive="true"/>
```
修改目标文件。
- `target`：`string`, 目标 Node 的 Computer ID。
- `file`：`string`, 目标文件的路径。
- `path`：`string`, 目标文件所在目录。
- `keyword`：`string`, 关键词。
- *`removal`*?：`bool`, 要求是否是删除关键词，还是添加关键词。默认 `false`。为 `true` 时要求删除关键词；为 `false` 时要求添加关键词。
- `caseSensitive`：`bool`, 是否区分大小写。默认 `false`。

如果你想实现 替换，你可以写两个 Goal 来分别要求删除某关键词和添加某关键词。 例如 `extension` → `data`：
```xml
<goal type="filechange" target="advExamplePC" file="changeFile.txt" path="home" keyword="extension"/>
<goal type="filechange" target="advExamplePC" file="changeFile.txt" path="home" keyword="data" removal="true" caseSensitive="true"/>
```

### `ClearFolder`

```xml
<goal type="clearfolder" target="advExamplePC" path="home"/>
```
清空目标文件夹。
- `target`：`string`, 目标 Node 的 Computer ID。
- `path`：`string`, 目标文件夹的路径。

### `GetAdmin`

```xml
<goal type="getadmin" target="advExamplePC"/>
```
获取目标 Node 的管理员权限并且保持登陆状态。
- `target`：`string`, 目标 Node 的 Computer ID。

> [!IMPORTANT]
> 
> 这其实是要求节点处于管理员登陆状态。某些情况下（比如 Node 设置了 `<admin type="fast" resetPassword="true">`），玩家断开连接后会失去管理员登陆状态。此时不会满足该 Goal。

### `GetString`

```xml
<goal type="getstring" target="password" />
```
要求回复字符串。
- `target`：`string`, 要求回复的字符串。

### `Delay`

```xml
<goal type="delay" time="10.0"/>
```
延迟执行。
- `time`：`float`, 延迟时间，单位为秒。

### `HasFlag`

```xml
<goal type="hasflag" target="flagName"/>
```
要求目标 Node 具有指定的 Flag。
- `target`：`string`, 目标 Flag。不能一个 Goal 填多个。

### `FileUpload`

```xml
<goal type="fileupload" target="advExamplePC" file="asdf2.dec" path="home" destTarget="introFactionHomeNode" destPath="home" decrypt="true" decryptPass="password"/>
```
上传目标文件。
- `target`：`string`, 源文件所在 Node 的 Computer ID。
- `file`：`string`, 源文件名。
- `path`：`string`, 源文件所在目录。
- `destTarget`：`string`, 上传到的目标位置所在 Node 的 Computer ID。
- `destPath`：`string`, 目标位置目录。
- *`decrypt`*?：`bool`, 是否解密上传的文件。默认 `false`。为 `true` 时认为要解密文件并且上传。
- *`decryptPass`*?：`string`, 解密密码。如果解密上传的文件且这个文件有密码，必须填写密码。

### `AddDegree`

```xml
<goal type="AddDegree" owner="John Stalvern" degree="Masters in Digital Security" uni="Manchester University" gpa="3.0"/>
```
添加学位。学位的所有者的定义基于名字 —— 在 People 中定义相关人物信息，并在此处通过名字进行引用。
- `owner`：`string`, 学位的所有者。
- `degree`：`string`, 学位的名称。
- `uni`：`string`, 学位的学校。
- `gpa`：`float`, 学位的 GPA。

> [!IMPORTANT]
> 
> 该 Goal 要求存在一个学术服务器，并满足以下要求：
> 1. Computer ID 必须是 `"academic"`。
> 2. 必须拥有 `academicDatabase` Daemon。

### `WipeDegrees`

```xml
<goal type="wipedegrees" owner="John Stalvern"/>
```
删除目标人物的所有学位。
- `owner`：`string`, 目标人物的名字。

> [!IMPORTANT]
> 
> 该 Goal 要求存在一个学术服务器，并满足以下要求：
> 1. Computer ID 必须是 `"academic"`。
> 2. 必须拥有 `academicDatabase` Daemon。

### `SendEmail`

```xml
<goal type="sendemail" mailServer="jmail" recipient="mailuser123" subject="Email Subject!" body="Email Body!"/>
```
发送邮件到某邮箱。一般是玩家从医疗数据库中发送的医疗数据。
- `mailServer`：`string`, 邮件服务器的 Computer ID。
- `recipient`：`string`, 收件人。
- `subject`：`string`, 邮件主题。
- *`body`*?：`string`, 邮件内容。默认空字符串。

### `GetAdminPasswordString` <Badge type="caution">DLC Required</Badge>

```xml
<goal type="getadminpasswordstring" target="advExamplePC"/>
```
要求回复目标 Node 的管理员密码。
- `target`：`string`, 目标 Node 的 Computer ID。

> [!IMPORTANT]
> 玩家必须安装了 Hacknet Labyrinths DLC 才可以使用
