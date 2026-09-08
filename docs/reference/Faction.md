# Faction（阵营）

Faction 是使用 Action 的一种方法。与 ConditionalActions 的区别主要在于**条件不同**。

Faction 在一些参考资料里面也被翻译为 派系 。阵营更直观一些，故在本站采取 阵营 翻译。

Faction 会使用 FactionAction 给 Action 设置条件。FactionAction 可以根据玩家在该 Faction 中的 Rank（排名，游戏内又叫做 Point（积分））来决定是否执行它的 Action。

与 ConditionalActions 不同，Faction 不可以随时加载，而只能在游戏开始的时候加载。

描述 Faction 的 XML 结构如下：
```xml
<CustomFaction name="Faction Name" id="Faction_ID" playerVal="0">

    <!-- FactionAction -->
    <Action ValueRequired="1">

        <!-- Action -->
        <SaveGame DelayHost="delayNode" Delay="0"/>
        ...
    </Action>
    ...

</CustomFaction>
```

## FactionAction

```xml
<Action ValueRequired="1" Flags="flag1,flag2"></Action>
```
FactionAction 类似一个特殊的 Condition。

- `ValueRequired`：`int`，Rank > `ValueRequired` 时会执行 Action。默认值为 `10`。
- *`Flags`*?：`string`，描述需要满足的 flags 。多个 flags 之间用逗号 `,` 分隔。


Amturester的补充
## Faction的具体内容
我们一般统称为阵营，因为确实是阵营
比如之前的CESC,又或者是Entropy等
我们使用时可以在先在**ExtensionInfo.xml**中写入
```xml
...
  <Faction>Factions/xxx.xml</Faction>
...
```
具体文件需要调用相对应的Factions文件
具体文件如下
```xml
<!-- 自定义一个阵营|阵营名字|阵营ID|玩家初始分值 -->
<CustomFaction name="xxx" id="xxx" playerVal="0">
<!-- 创建一个action阵列|激活需要的分数|需要什么flag(多个用逗号隔开) -->
    <Action ValueRequired="1" Flags="xxx">
<!-- 注意，此处需要两个同时为True，也就是说，必须全部满足，当然，您可以直接删除flags参数 -->
        ...
        <!--此处为Actions的写法，但是不需要判定了-->
    </Action>
    ...
    <!--可以写更多的Actions阵列-->
</CustomFaction>
```


参考：[CustomFactionAction.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/Factions/CustomFactionAction.cs)
