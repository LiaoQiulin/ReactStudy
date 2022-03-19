#1 渲染元素(虚拟dom)
* 元素是react应用的最新构建块
* 元素描述了浏览器要展示的内容
* 相比浏览器dom, react元素是一个普通的js对象, 更容易创建
* React Dom负责按照React元素的描述更新浏览器dom
#2 渲染一个元素到浏览器Dom
##2.1 定义一个浏览器dom
```js
<div id="root"></div>
```
##2.2 将react元素挂载到浏览器dom
```js
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```
#3 更新react元素
* react元素是不可变得
* 更新实际上是创建一个全新的react元素
* React Dom拿变化后的react元素,子元素与变化前的元素,子元素比较, 并进行必要的dom更新
