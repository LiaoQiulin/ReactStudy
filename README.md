# 1 组件
* 函数组件: WelcomeFun.js
* 类组件: WelcomeClass.js
* 组合组件: ComposingComponents.js
* 抽取组件:ExtractingComponentsBefore.js,ExtractingComponentsAfter.js
# 2 属性只读
**组件应该像纯函数一样不要试图修改Props**
### 2.1 纯函数
```js
function sum(a, b) {
  return a + b;
}
```
### 2.2 非纯函数
```js
function withdraw(account, amount) {
  account.total -= amount;
}
```

