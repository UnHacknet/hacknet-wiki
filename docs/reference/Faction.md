# Faction（阵营）

Faction 是使用 Action 的一种方法。与 ConditionalActions 的区别主要在条件不同。

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

参考：[CustomFactionAction.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/Factions/CustomFactionAction.cs)
