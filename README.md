# 1 react元素介绍
* 元素描述了浏览器要展示的内容
* 相比浏览器dom, react元素是一个普通的js对象, 更容易创建
* ReactDom负责按照React元素的描述更新浏览器dom
# 2 将虚拟dom到浏览器Dom
### 2.1 定义一个浏览器dom
```js
<div id="root"></div>
```
### 2.2 将react元素挂载到浏览器dom
```js
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```
# 3 更新react元素
* react元素是不可变得:不可以改变孩子和属性
* 更新实际上是创建一个全新的react元素, 把他传到root.render()中
* 在实践中，大多数 React 应用程序只调用一次 root.render(), 


```jsx
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

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

# 4 React 只更新必要的东西

React Dom拿变化后的react元素,子元素与变化前的元素,子元素比较, 并进行必要的dom更新.

![avatar](https://reactjs.org/c158617ed7cc0eac8f58330e49e48224/granular-dom-updates.gif)

即使我们在每个刻度上创建一个描述整个 UI 树的元素，也只有内容发生变化的文本节点会被 React DOM 更新

