# 表单
> HTML 表单元素的工作方式与 React 中的其他 DOM 元素有点不同，因为表单元素自然会保留一些内部状态。
```jsx
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```
## 1 受控组件: ``ControlledComponents.js``
>在 HTML 中，``<input>``、``<textarea>`` 和 ``<select>`` 等表单元素通常会维护自己的状态并根据用户输入对其进行更新。在 React 中，可变状态通常保存在组件的 state 属性中，并且只能使用 setState() 进行更新。

> 当用户提交表单时，此表单具有的默认 HTML 表单行为浏览到新页面。如果你想要 React 中使用这种行为，它就可以工作。但在大多数情况下，使用 JavaScript 函数处理表单提交并访问用户输入表单数据的会很方便。实现这一目标的标准方法是使用一种称为“受控组件”的技术。

> 我们可以通过使 React 状态成为“单一事实来源”来将两者结合起来。然后，呈现表单的 React 组件还控制用户输入后在该表单的表现。
> 
> 以这种方式由 React 控制其值的输入表单元素称为“受控组件”。


> 由于在我们的表单元素上设置了 value 属性，因此显示的值将始终是 this.state.value，从而使 React 状态成为事实的来源。由于 handleChange 在每次击键时都会运行以更新 React 状态，因此显示的值将随着用户键入而更新。

> 使用受控组件，输入的值始终由 React 状态驱动。虽然这意味着您必须键入更多代码，但您现在也可以将值传递给其他 UI 元素，或从其他事件处理程序中重置它。
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
