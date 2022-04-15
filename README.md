# Hooks API

## 1 useState

### 1.1 函数更新

```jsx
setCount(prevCount => prevCount + 1)
```

### 1.2 惰性初始状态

```jsx
const [state, setState] = useState(() => {
    const initialState = someExpensiveComputation(props);
    return initialState;
});
```

### 1.3 摆脱状态更新

### 1.4 批处理状态更新

## 2 useEffect

### 2.1 清理效果

```jsx
useEffect(() => {
    const subscription = props.source.subscribe();
    return () => {
        // Clean up the subscription
        subscription.unsubscribe();
    };
});
```

### 2.2 效果时间

> 从 React 18 开始，传递给 useEffect 的函数将在布局和绘制之前同步触发

### 2.3 有条件地触发效果

```jsx
useEffect(
    () => {
        const subscription = props.source.subscribe();
        return () => {
            subscription.unsubscribe();
        };
    },
    [props.source],
);
```

## 3 useContext

```jsx
//1. 
const ThemeContext = React.createContext(themes.light);
//2.
<ThemeContext.Provider value={themes.dark}>
    <Toolbar/>
</ThemeContext.Provider>
//3.
const theme = useContext(ThemeContext);
```
## 4 useReducer
## 5 useCallback
>返回一个记忆化的回调。
```jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```
## 6 useMemo
>返回一个记忆值。
```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
## 7 useRef
>useRef 返回一个可变 ref 对象，其 .current 属性初始化为传递的参数 (initialValue)。返回的对象将在组件的整个生命周期内持续存在。
