# 状态 和 生命周期

## 1 通过封装Clock组件了解状态和生命周期

### 1.1 封装前:

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    root.render(element);
}

setInterval(tick, 1000);
```

### 1.2 封装时钟的外观

````jsx
const root = ReactDOM.createRoot(document.getElementById('root'));

function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

function tick() {
    root.render(<Clock date={new Date()}/>);
}

setInterval(tick, 1000);
````

目标: 希望编写一次并让时钟自行更新. 需要添加状态.

```jsx
root.render(<Clock/>);
```

### 1.3 将函数组件转换为类组件

```jsx
class Clock extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
```

### 1.4 将本地状态添加到类

```jsx
class Clock extends React.Component {
    constructor(props) {
        //  props 传递给基本构造函数
        super(props);
        //2. 在构造函数中添加一个初始化的状态
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                {/* 1.  将 this.props.date 替换为 this.state.date*/}
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

//3. 移除date属性
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock/>);
```

### 1.5 将生命周期方法添加到类

```jsx
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    //1. 添加生命周期方法: 在组件输出渲染到dom之后运行
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    //1. 添加生命周期方法: Clock 组件从 DOM 中移除时运行
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
```

## 2. 正确使用状态

### 2.1 不要直接修改状态

错误更新:

```js
// Wrong
this.state.comment = 'Hello';
```

正确更新:

```js
// Correct
this.setState({comment: 'Hello'});
```

### 2.2 状态更新可以是异步的

react会将多个更新状态操作合并一次性统一执行, 所有需要正确依赖上一个状态值

错误引用:

```js
// Wrong
this.setState({
    counter: this.state.counter + this.props.increment,
});
```

正确引用:

```js
// Correct 箭头函数
this.setState((state, props) => ({
    counter: state.counter + props.increment
}));
```

```js
// Correct 普通函数
this.setState(function (state, props) {
    return {
        counter: state.counter + props.increment
    };
});
```

### 2.3 状态更新被合并

```js
constructor(props)
{
    super(props);
    this.state = {
        posts: [],
        comments: []
    };
}

componentDidMount()
{
    fetchPosts().then(response => {
        this.setState({
            posts: response.posts
        });
    });

    fetchComments().then(response => {
        this.setState({
            comments: response.comments
        });
    });
}

```

posts, comments分别独立更新, 当更新posts的时候, comments是旧的对象

## 3. 数据向下流动

1. 组件可以选择将其状态作为道具传递给其子组件
2. 组件将在其 props 中接收日期，并且不知道它是来自父组件的状态、属性 还是手动输入的
3. 任何状态总是由某个特定组件拥有，并且从该状态派生的任何数据或 UI 只能影响树中它们“下方”的组件
4. 这通常称为“自上而下”或“单向”数据流。

>在 React 应用程序中，组件是有状态的还是无状态的被认为是组件的实现细节，它可能会随着时间而改变。您可以在有状态组件中使用无状态组件，反之亦然。





