# ConditionalAction（条件行为）

ConditionalAction 是使用 Action 的一种方法。

ConditionalAction 会使用 Condition 给 Action 设置条件。ConditionalAction 被游戏加载后，Condition 会在满足后执行它的 Action。

描述 ConditionalAction 的 XML 结构如下：

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
