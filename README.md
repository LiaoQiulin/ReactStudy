# 1. react建议使用``组合``而不是``继承``来重用组件间的代码

## 1.1 容器组件. 通过属性传递组件

* 特殊属性``children``: ``ChildrenCompent.js``

默认children 代表子组件

```jsx
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}
```

* 指定属性传递组件: ``PropsCompent.js``

```jsx
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}
```

## 1.2 "特例"组件. ``WelcomeDialog.js``

* WelcomeDialog 是 Dialog 的一个特例

```jsx
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}
```

* 组合对类组件同样适用: ``SignUpDialog.js``


# 2 继承

* 不建议适用继承, 建议使用组合替代                                      
* 非ui功能, 抽取单独的js模块
