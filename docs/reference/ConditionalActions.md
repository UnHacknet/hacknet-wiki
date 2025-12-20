---
outline: deep
---
# ConditionalActions（条件行为）

ConditionalActions 是使用 Action 的一种方法。

ConditionalActions 会使用 Condition 给 Action 设置条件。ConditionalActions 被游戏加载后，Condition 会在满足后执行它的 Action。

描述 ConditionalActions 的 XML 结构如下：

```xml
<ConditionalActions>

    <!-- Condition -->
    <Instantly needsMissionComplete="false">

        <!-- Action -->
        <SaveGame DelayHost="delayNode" Delay="0"/>
        ...
    </Instantly>

    ...
</ConditionalActions>
```

## 所有 Condition

### `Instantly`

```xml
<Instantly needsMissionComplete="false"></Instantly>
```

`Instantly` 会在 `Action` 被加载后立即触发。
- *`needsMissionComplete`*?：`bool`，描述是否需要处于任务完成状态才能触发。默认值为 `false`。

参考：[SCInstantly.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SCInstantly.cs)

### `OnConnect`

```xml
<OnConnect target="targetComp" needsMissionComplete="false" requiredFlags="flag1,flag2"></OnConnect>
```

OnConnect 会在连接到目标 Nodes 后触发。
- `target`：`string`，描述目标 Nodes 的 `ComputerID`。
- *`needsMissionComplete`*?：`bool`，描述是否需要处于任务完成状态才能触发。默认值为 `false`。
- *`requiredFlags`*?：`string`，描述需要满足的标志位。多个标志位之间用逗号 `,` 分隔。与 `HasFlags` 不同，为空或不填则不检查Flags。

参考：[SCOnConnect.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SCOnConnect.cs)

### `OnDisconnect`

```xml
<OnDisconnect target="targetComp"></OnDisconnect>
```

OnDisconnect 会在从目标 Nodes 断开连接后触发。
- `target`：`string`，描述目标 Nodes 的 `ComputerID`。

> [!WARNING]
> `target` 如果填 `playerComp`，那么在连接到 `playerComp` 时也会触发。因为 `disconnect` 的本质，其实就是连接到 `playerComp`。

参考：[SCOnDisconnect.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SCOnDisconnect.cs)

### `HasFlags`

```xml
<HasFlags requiredFlags="flag1,flag2"></HasFlags>
```

HasFlags 会在满足所有标志位时触发。
- *`requiredFlags`*?：`string`，描述需要满足的标志位。多个标志位之间用逗号 `,` 分隔。为空或不填则立即执行。

参考：[SCHasFlags.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SCHasFlags.cs)

### `OnAdminGained`

```xml
<OnAdminGained target="targetComp"></OnAdminGained>
```

OnAdminGained 会在获取目标 Nodes 的管理员权限后触发。
- `target`：`string`，描述目标 Nodes 的 `ComputerID`。

参考：[SCOnAdminGained.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SCOnAdminGained.cs)

## 注意事项

你可能在一些地方见到过 Condition `DoesNotHaveFlags`。它确实在 Hacknet 中有相关代码，但是没有在 Hacknet 中实装。

参考：[SCDoesNotHaveFlags.cs](https://github.com/UnHacknet/OpenHacknet/blob/main/SCDoesNotHaveFlags.cs) [SerializableCondition.cs#L50-L55](https://github.com/UnHacknet/OpenHacknet/blob/main/SerializableCondition.cs#L50-L55)
