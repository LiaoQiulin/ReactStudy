#  处理事件
## 1. 与html的区别
### 1.1. react使用驼峰命名, 而不是小写.
### 1.2. react传递函数作为时间处理, 而不是字符串
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
### 1.3. react不能返回 false 以防止默认行为,必须显式调用 preventDefault: PreventEvent.js

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

### 1.4.  使用 React 时，创建 DOM 元素后，通常不需要调用 addEventListener 来为 DOM 元素添加监听器。相反，只需在最初呈现元素时提供一个侦听器。

## 2. 事件函数定义与使用

### 2.1 函数绑定this: ``ConstructorThis.js.js``
js特性: 默认不绑定类方法. 所以需要在需要在构造函数中将方法绑定this
```js
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}
```
### 2.2 实验性的类字段语法: ``ExperimentalSyntax.js``

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

### 2.3 在回调中使用箭头函数: ``ArrowFun.js``

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

## 3. 传参给函数

5.1 箭头函数需要显示传递e

```jsx
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
```

5.2 使用bind e会自动转发
```jsx
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

以上两个等价. 
