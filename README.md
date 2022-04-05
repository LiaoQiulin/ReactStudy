# 组合与继承

## 1. react建议使用``组合``而不是``继承``来重用组件间的代码
``React has a powerful``
> React 具有强大的组合模型，我们建议使用组合而不是继承来重用组件之间的代码。
## 2. 使用组合解决的两个场景

### 2.1 容器组件:  通过属性传递组件

#### 2.1.1 默认children属性代表子组件: ``ChildrenCompent.js``

#### 2.1.2 指定属性传递组件: ``PropsCompent.js``

### 2.2 "特例"组件. ``WelcomeDialog.js``

* WelcomeDialog 是 Dialog 的一个特例

> 组合对类组件同样适用: ``SignUpDialog.js``

## 3. 关于继承

* 不建议适用继承, 建议使用组合替代
* 非ui功能, 抽取成单独的js模块
