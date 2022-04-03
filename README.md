# 1 JSX介绍
**JSX是JavaScript的语法扩展.** 像HTML一样用来描述UI, 具有 JavaScript 的全部功能.
```jsx
const element = <h1>Hello, world!</h1>;
```
# 2 JSX使用
## 2.1 内置表达式
**可以在大括号中使用任何变量和[JavaScript表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#expressions),比如 ``2 + 2``, ``user.firstName``, 或者 ``formatName(user)``**
### 2.1.1 变量
```js
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
### 2.1.2 js表达式
```js
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
## 2.2 本身也是表达式
**编译后，JSX 表达式成为常规的 JavaScript 函数调用并计算为 JavaScript 对象.**
```jsx
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
编译后:
```js
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```
``React.createElement()``创建的对象类似:
```js
// Note: this structure is simplified
const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
};
```
**这意味着您可以在 if 语句和 for 循环中使用 JSX，将其分配给变量，将其作为参数接受，并从函数中返回**
```js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```
## 2.3 指定属性
## 2.3.1 双引号字符串属性值
```js
const element = <a href="https://www.reactjs.org"> link </a>;
```
## 2.3.2 花括号表达式属性值
```js
const element = <img src={user.avatarUrl}></img>;
```
## 2.3.3 驼峰格式属性名

* ``class``变为``classNam``
* ``tabindex``变为``tabIndex``

## 2.4 JSX孩子标签
和 HTML类似
## 2.4.1 空标签
```js
const element = <img src={user.avatarUrl} />;
```
## 2.4.2 非空标签
```js
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```
## 2.5 防止注入攻击
渲染前对JSX中的嵌入值进行了转义
```js
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```
