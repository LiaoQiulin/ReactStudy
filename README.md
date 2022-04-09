#  使用 State Hook

## 1. 等效类示例
>我们将通过将此代码与等效的类示例进行比较来开始学习 Hooks。
1. function
```jsx
import React, { useState } from 'react';

function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
```
2. class
```jsx
class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
            </div>
        );
    }
}
```
## 2. Hooks 和 函数组件
> Hooks 之前, ``函数组件``也叫 ``无状态组件``. 现在 Hooks将状态引入``函数组件``, 所以最好叫``函数组件``
## 3. Hook是什么
### 3.1 Hook是什么
> Hook 是一种特殊函数，可让您“挂钩” React 功能
### 3.2 什么使用Hook
> 如果您编写了一个函数组件并意识到您需要向它添加一些状态，那么之前您必须将它转换为一个类。现在您可以在现有的函数组件中使用 Hook。
## 4. 声明一个状态变量
1. class
```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
```
2. function
```jsx
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
```
### 4.1 调用 useState 有什么作用？
>它声明了一个“状态变量”。
### 4.2 我们将什么作为参数传递给 useState？
>useState() Hook 的唯一参数是初始状态。
### 4.3 useState 返回什么？
>它返回一对值：当前状态和更新它的函数。
## 5. 读取状态
1. class
```jsx
  <p>You clicked {this.state.count} times</p>
```
2. function
```jsx
  <p>You clicked {count} times</p>
```
## 6. 更新状态
1. class
```jsx
<button onClick={() => this.setState({ count: this.state.count + 1 })}>
    Click me
</button>
```
2. function
```jsx
<button onClick={() => setCount(count + 1)}>
    Click me
</button>
```
## 7 回顾
### 7.1 方括号是什么意思？
```jsx
 const [fruit, setFruit] = useState('banana');
```
>左边的名字不是 React API 的一部分。您可以命名自己的状态变量
```jsx
  var fruitStateVariable = useState('banana'); // Returns a pair
  var fruit = fruitStateVariable[0]; // First item in a pair
  var setFruit = fruitStateVariable[1]; // Second item in a pair
```
>当我们用 useState 声明一个状态变量时，它返回一个对——一个包含两个项目的数组。第一项是当前值，第二项是让我们更新它的函数。使用 [0] 和 [1] 访问它们有点令人困惑，因为它们具有特定的含义。这就是我们使用数组解构的原因。
### 7.2 使用多个状态变量
```
function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
```
>将状态变量声明为一对 [something, setSomething] 也很方便，因为如果我们想使用多个状态变量，它可以让我们为不同的状态变量赋予不同的名称
