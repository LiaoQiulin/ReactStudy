# **1 JSX介绍**


##JSX是js的扩展语法, 本质是js.

```js
const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);
```
效果与下面一样
```js
const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);
```

# **2 JSX使用**

**有利于构建ui**

# 3 内置表达式

##3.1 使用变量
```js
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

##3.2 任何js表达式
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

#4 本身也是表达式

**可以在if和for循环里,可以赋值给变量, 也可以作为方法入参和返回值**
```js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

#5 使用JSX指定属性

##5.1 双引号字符串属性
```js
const element = <a href="https://www.reactjs.org"> link </a>;
```

##5.2 花括号表达式属性
```js
const element = <img src={user.avatarUrl}></img>;
```

##5.3 属性名 驼峰命名
JSX更接近js, 而不是html, React DOM习惯驼峰命名属性.
```text
For example, class becomes className in JSX, and tabindex becomes tabIndex.
```

#6 JSX孩子标签

##6.1 空标签 />
```js
const element = <img src={user.avatarUrl} />;
```

##6.2 非空标签
```js
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```
#7 JSX 防止注入攻击

渲染前进行了转义
```js
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```
