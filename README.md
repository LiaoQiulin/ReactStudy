
# 1 添加本地状态

ClockClass.js

# 类中添加生命周期方法



# 状态更新

## 不要直接修改状态

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

## 状态更新可以是异步的

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

## 状态更新被合并

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

# 数据向下流动

"自上而下"或"单向"数据流, 数据从外层组件向内层组件进行传递和更新.





