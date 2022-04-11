# Hooks使用规则

## 1. 仅在顶层调用 Hooks
>不要在循环、条件或嵌套函数中调用 Hook。
>
``So how does``
>那么 React 是如何知道哪个 state 对应哪个 useState 调用的呢？答案是 React 依赖于 Hooks 的调用顺序。
## 2. 仅从 React 函数调用 Hooks

>不要从常规 JavaScript 函数中调用 Hooks。相反，您可以：
1. 从 React 函数组件调用 Hooks。
2. 从自定义 Hooks 调用 Hooks
