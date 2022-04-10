#  useEffect

## 1. 无返回函数的useEffect ``EffectsWithoutCleanup.js``

```jsx
useEffect(() => {
    console.log("组件初始化或更新")
});
```
### 1.1 useEffect 有什么作用？
>通过使用这个 Hook，你告诉 React 你的组件需要在渲染之后做一些事情。
### 1.2 为什么在组件内部调用 useEffect？
>将 useEffect 放在组件中可以让我们直接从效果中访问计数状态变量（或任何属性）。
### 1.3 每次渲染后都会运行 useEffect 吗？
>是的！默认情况下，它会在第一次渲染后和每次更新后运行。

## 2. 有返回函数的useEffect  ``EffectsWithCleanup.js``
### 2.1 为什么我们从效果中返回一个函数？
> 这是效果的可选清理机制。每个效果都可能返回一个在它之后进行清理的函数。
### 2.2 React 究竟何时清理效果？
> React 在组件卸载时执行清理。然而，正如我们之前所了解的，效果会为每次渲染运行，而不仅仅是一次。这就是为什么 React 还会在下次运行效果之前清理上一次渲染中的效果。
## 3 回顾
## 4 使用效果的技巧
### 4.1 使用多个效果来区分关注点
### 4.2 通过跳过效果优化性能
>将数组作为可选的第二个参数传递给 useEffect
```jsx
        useEffect(() => {
            console.log("组件初始化或更新: 空数组")
            return function (){
                console.log("组件销毁: 空数组")
            }
        },[]);
       useEffect(() => {
            console.log("组件初始化或更新: count")
            return function (){
                console.log("组件销毁: count")
            }
        },[count]);
```
**数组中的值没有变动, 重新渲染时,会跳过此效果.**
