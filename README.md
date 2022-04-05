# 组合与继承

## 1. react建议使用``组合``而不是``继承``来重用组件间的代码

## 2. 使用组合解决问题

### 2.1 容器组件:  通过属性传递组件


#### 2.1.1 默认children属性代表子组件: ``ChildrenCompent.js``

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

#### 2.1.2 指定属性传递组件: ``PropsCompent.js``

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

### 2.2 "特例"组件. ``WelcomeDialog.js``

* WelcomeDialog 是 Dialog 的一个特例



> 组合对类组件同样适用: ``SignUpDialog.js``


## 2 继承

* 不建议适用继承, 建议使用组合替代
* 非ui功能, 抽取成单独的js模块
