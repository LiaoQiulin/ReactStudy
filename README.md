# 1 受控组件: ``ControlledComponents.js``

由react控制其值的输入表单元素称为``受控组件``

## 1.1 textarea 标签: ``textarea.js``

## 1.2 select 标签: ``textarea.js``

## 1.3 处理多个输入: ``MultipleInputs.js``

es6 语法

```js
this.setState({
  [name]: value
});
```

等价 es5 语法

```jsx
var partialState = {};
partialState[name] = value;
this.setState(partialState);
```

## 1.4 表单解决方案: [``Formik``](https://formik.org/docs/overview)
