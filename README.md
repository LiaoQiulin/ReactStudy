# **Lists and Keys**

## 1. map函数

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
//[2, 4, 6, 8, 10]
```

## 2 渲染多个组件: ``MultipleComponents.js``

## 3 基本列表组件: ``BasicListComponent.js``

## 4 keys

### 4.1 Keys 帮组react识别item的变更,新增,删除, 需要给item元素一个稳定的标识

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```

### 4.2 最佳实践是取一个代表数据元素的唯一标识, 比如数据的唯一id

```jsx
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

### 4.3 如果没有一个稳定的id, 可以使用数组元素的索引id

```jsx
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```

## 5 使用键提取组件
>键仅在周围数组的上下文中才有意义

错误使用:

```jsx
function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Wrong! The key should have been specified here:
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

```

正确使用:

```jsx
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
```

## 6. 键只能在兄弟姐妹中唯一: ``UniqueAmongSiblings.js``



## 7 在 JSX 中嵌入 map()

```jsx
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}
```
