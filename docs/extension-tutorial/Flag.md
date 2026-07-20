# Flag（标志）

Flag 是一类玩家可以“拥有”的字符串。

游戏内有一个全局的字符串集合，用于存储玩家拥有的 Flags。

Function 可以添加和移除玩家拥有的 Flags，Action、Goal 等可以通过检查玩家是否拥有 Flag 来判断玩家的所处状态。

```python
# 伪代码，图一乐
player_flags: set[str] = set()

def AddFlags(*flags: str):
    player_flags.update(flags)

def RemoveFlags(*flags: str):
    player_flags.difference_update(flags)

def HasFlag(flag: str) -> bool:
    return flag in player_flags
```
