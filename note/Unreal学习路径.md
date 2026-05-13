下面给你一套偏「真正能学会 UE」的路线，而不是「看完一堆视频但不会做项目」的路线。

这套路线适合你这种：

* 对图形学/渲染有兴趣
* 想真正进入 UE 技术开发
* 希望以后能做：

  * Gameplay
  * Tool
  * 渲染
  * Shader
  * 插件
  * 技术美术
  * 图形程序

的人。

---

# 四个月 UE 蓝图 + C++ 学习路线

整体目标：

| 月份    | 目标                               |
| ------- | ---------------------------------- |
| 第 1 月 | 学会 UE 编辑器 + 蓝图思维          |
| 第 2 月 | 掌握 Gameplay Framework + 蓝图项目 |
| 第 3 月 | 学 UE C++                          |
| 第 4 月 | 蓝图 + C++ 混合开发                |

---

# 第 1 个月：UE 蓝图入门

目标：

* 熟悉 UE 编辑器
* 理解 Gameplay Framework
* 学会「游戏逻辑」

这一阶段：

> 不要碰复杂 C++

---

## 重点学习内容

## UE 编辑器

学习：

* Content Browser
* Level
* Actor
* Component
* Material
* World Outliner
* Input
* Collision

---

## 蓝图基础

重点：

* Event BeginPlay
* Tick
* Branch
* ForEach
* Cast
* Interface
* Timeline
* Event Dispatcher

---

## Gameplay Framework（最重要）

必须理解：

| 类               | 作用           |
| ---------------- | -------------- |
| Actor            | 世界中的对象   |
| Pawn             | 可控制对象     |
| Character        | 带角色移动系统 |
| PlayerController | 输入           |
| GameMode         | 游戏规则       |
| GameState        | 全局状态       |
| Widget           | UI             |

---

# 第一个月项目

不要做「大项目」。

做这些：

## 项目 1

第三人称角色：

* 移动
* 跳跃
* 镜头

---

## 项目 2

交互系统：

* 开门
* 拾取
* 血条
* UI

---

## 项目 3

简单战斗：

* 发射物
* 敌人 AI
* HP
* 死亡

---

# 第一个月推荐课程（高质量）

## 官方（必须）

### [Epic Developer Community](https://dev.epicgames.com/community/?utm_source=chatgpt.com)

Epic 官方学习平台。

---

## 蓝图最推荐

### [Stephen Ulibarri UE5 Blueprints Course](https://www.udemy.com/topic/unreal-engine-blueprints/?utm_source=chatgpt.com)

社区公认质量很高。 ([udemy.com][1])

优点：

* 不只是「照着做」
* 真正在教架构
* 教你如何组织蓝图

---

## 免费推荐

### [Unreal Sensei](https://www.youtube.com/@UnrealSensei?utm_source=chatgpt.com)

适合快速建立 UE 感觉。

### [Mathew Wadstein](https://www.youtube.com/@MathewWadsteinTutorials?utm_source=chatgpt.com)

查节点神器。

几乎所有蓝图节点他都讲过。 ([Class Central][2])

---

# 第 2 个月：真正学 UE Gameplay

目标：

* 不再只是「会拖节点」
* 开始真正做游戏逻辑

---

# 学习重点

## AI

学习：

* Behavior Tree
* Blackboard
* AIController

---

## 动画系统

学习：

* Animation Blueprint
* State Machine
* Blend Space

---

## UI

学习：

* Widget Blueprint
* HUD
* Inventory UI

---

## 数据驱动

学习：

* DataTable
* DataAsset
* SaveGame

---

# 第二个月项目（重要）

## 做一个完整小游戏

推荐：

* TPS
* Roguelike
* 小型动作游戏

功能：

* UI
* 敌人
* 技能
* 背包
* 保存
* 音效

---

# 第二个月结束时你应该达到

你已经：

* 理解 UE 框架
* 会自己查文档
* 会做游戏逻辑
* 不再害怕蓝图

这时候开始 C++ 最合适。

社区里很多开发者也是这样建议的：先蓝图，再 C++。 ([Reddit][3])

---

# 第 3 个月：UE C++ 入门

这是关键阶段。

---

# 注意

你不是在学「纯 C++」。

你是在学：

# Unreal C++

UE C++ 有：

* UObject
* Reflection
* Macro
* GC
* Delegate
* Component System

社区里很多人都会强调：

> Unreal C++ 和普通 C++ 不一样。 ([Reddit][4])

---

# 第三个月重点

## 必学

| 内容           | 重要度 |
| -------------- | ------ |
| UCLASS         | ★★★★★  |
| UPROPERTY      | ★★★★★  |
| UFUNCTION      | ★★★★★  |
| Actor 生命周期 | ★★★★★  |
| Component      | ★★★★★  |
| Delegate       | ★★★★   |
| Interface      | ★★★★   |
| TArray/TMap    | ★★★★   |

---

# 学习方式（非常重要）

## 蓝图 → C++

不要从零开始纯写代码。

正确方式：

1. 先蓝图实现
2. 再 C++ 重写
3. 理解映射关系

这是 Unreal 社区最推荐的方法之一。 ([Reddit][4])

---

# 第三个月推荐课程（强烈推荐）

## 第一推荐

### [Stephen Ulibarri UE5 C++ Course](https://www.udemy.com/topic/unreal-engine-blueprints/?utm_source=chatgpt.com)

目前社区评价非常高。 ([udemy.com][1])

优点：

* 真正讲 UE 架构
* 不是「拼代码」
* 会教：

  * Component
  * Delegate
  * Gameplay Framework
  * Blueprint 与 C++ 结合

---

## 第二推荐（进阶）

### [Tom Looman UE C++ Course](https://tomlooman.com/unreal-engine-cpp-course-early-access/?utm_source=chatgpt.com)

偏职业化。

适合：

* 想进游戏行业
* 想学工程结构
* 想做大型项目

课程内容已经更新到 UE5。 ([Tom Looman][5])

---

## C++ 基础（必须补）

### [LearnCpp](https://www.learncpp.com/?utm_source=chatgpt.com)

这是最好的免费 C++ 教程之一。

社区也经常推荐它。 ([Reddit][4])

---

# 第 4 个月：混合开发（真正 UE 开发）

目标：

* 学会：

  * 「什么用蓝图」
  * 「什么用 C++」

---

# 推荐原则

## C++

适合：

* 核心系统
* 算法
* AI
* 网络
* 性能关键逻辑

---

## 蓝图

适合：

* 调参
* 技能
* UI
* 关卡逻辑
* 动画事件

---

# 第四个月项目

## 做一个「真正的小型游戏」

推荐：

* TPS Shooter
* SoulsLike Demo
* Roguelike
* 生存建造

---

# 必须加入

## C++ 系统

例如：

* Inventory
* Attribute
* Combat
* Interaction

---

## 蓝图层

例如：

* 技能
* UI
* 特效
* 动画

---

# 第四个月进阶方向（按兴趣）

你偏图形学。

所以后续建议：

---

# 渲染方向

学习：

* Material
* HLSL
* Custom Node
* Global Shader
* RDG
* SceneViewExtension
* Render Graph

---

# 技术美术方向

学习：

* Niagara
* Material Function
* PCG
* Animation System

---

# Gameplay 方向

学习：

* GAS
* Network
* Replication
* Subsystem

---

# 我真正推荐的「课程组合」

这是我认为目前质量最高的一套组合：

---

# 入门

## 1

### [Unreal Sensei](https://www.youtube.com/@UnrealSensei?utm_source=chatgpt.com)

建立感觉。

---

## 2

### [Stephen Ulibarri Blueprint Course](https://www.udemy.com/topic/unreal-engine-blueprints/?utm_source=chatgpt.com)

建立 UE 思维。

---

## 3

### [LearnCpp](https://www.learncpp.com/?utm_source=chatgpt.com)

补 C++ 基础。

---

## 4

### [Stephen Ulibarri C++ Course](https://www.udemy.com/topic/unreal-engine-blueprints/?utm_source=chatgpt.com)

进入 UE C++。

---

## 5（进阶）

### [Tom Looman Courses](https://tomlooman.com/unreal-engine-cpp-course-early-access/?utm_source=chatgpt.com)

职业化。

---

# 最后给你一个非常关键的建议

UE 学习效率最高的方法：

# 小项目循环

不要：

* 连续看 30 小时教程

要：

* 看 20 分钟
* 自己做 2 小时

真正的成长：

不是「知道节点」。

而是：

# 知道为什么这么组织系统

这也是蓝图和 C++ 混合开发真正的核心。

[1]: https://www.udemy.com/topic/unreal-engine-blueprints/?utm_source=chatgpt.com "Top Unreal Engine Blueprints Courses Online - Updated [May 2026]"
[2]: https://www.classcentral.com/report/best-unreal-engine-courses/?utm_source=chatgpt.com "Get Real with Unreal: 10 Best Unreal Engine Courses for 2026 — Class Central"
[3]: https://www.reddit.com/r/UnrealEngine5/comments/1l4lcz1?utm_source=chatgpt.com "As a newbie in the engine which course I should start for stephen ulibari. The c++ or the blueprint?"
[4]: https://www.reddit.com/r/unrealengine/comments/1kvtx20?utm_source=chatgpt.com "What's the best way to learn C++ for Unreal in 2025 as a beginner?"
[5]: https://tomlooman.com/unreal-engine-cpp-course-early-access/?utm_source=chatgpt.com "C++ Course Completely Rebuilt for Unreal Engine 5 (Early Access) - Tom Looman"
