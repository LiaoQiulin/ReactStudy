# 1 处理事件

**html**

```html
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

**react**

```jsx
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

# 2 阻断默认行为: PreventEvent.js

**html**

```html
<form onsubmit="console.log('You clicked submit.'); return false">
    <button type="submit">Submit</button>
</form>
```

**react**

```jsx
function Form() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    );
}
```

# 3 e


**html**


原生事件,  在创建dom之后, 调用``addEventListener``添加监听事件


**react**

复合事件, 在元素初始化时提供一个监听器

# 4 函数绑定this

js特性: 默认不绑定类方法. 所以需要在需要在构造函数中将方法绑定this
## 4.1 构造函数中绑定this: ConstructorThis.js.js

```js
        constructor(props) {
            super(props);
            this.state = {isToggleOn: true};

            // This binding is necessary to make `this` work in the callback
            this.handleClick = this.handleClick.bind(this);
        }
```

## 4.2 实验性的类字段语法: ExperimentalSyntax.js

```jsx
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

## 4.3 在回调中使用箭头函数: ArrowFun.js

```jsx
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```

# 5. 传参给函数

5.1 箭头函数需要显示传递e

```jsx
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
```

5.2 使用bind e会自动转发
```jsx
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

以上两个等价. 
