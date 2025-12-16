# Action（行为）

Action 可以 实时改变游戏中的部分内容。

Action 可以分为两部分：`Condition` 和 `Trigger`。

> [!NOTE]
> 部分教程没有这么区分，但是为了方便交流，和方便理解 `Action` 与 `Faction` 的关系，在此将其分为 `Condition` 和 `Trigger` 两部分。

## Action 的结构

描述 Action 的 XML 结构如下：

```xml
<!-- 根标签 -->
<ConditionalActions>

    <!-- Condition -->
    <Instantly needsMissionComplete="false">

        <!-- Trigger -->
        <SaveGame DelayHost="delayNode" Delay="0"/>
        ...
    </Instantly>

    ...
</ConditionalActions>
```
