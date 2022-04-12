# 自定义Hooks
>自定义 Hooks 可以让您将组件逻辑提取到可重用的函数中

## 1. 使用自定义Hooks
### 1.1 此代码``useFriendStatus``是否等同于原始示例 ``normal.js``？ 
> 是的
### 1.2 我必须以“use”开头来命名我的自定义 Hooks 吗？
> 请这么做
### 1.3 使用相同 Hook 的两个组件是否共享状态？
> 否
### 1.4 自定义 Hook 如何获得孤立状态？
> 因为我们直接调用 useFriendStatus，所以从 React 的角度来看，我们的组件只调用了 useState 和 useEffect。而且正如我们前面所了解的，我们可以在一个组件中多次调用 useState 和 useEffect ，它们将是完全独立的。
