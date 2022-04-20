# react-router

## 01 安装

> npm install react-router-dom@6

## 02 接入URL

应用与url建立连接

```jsx
    ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);
```

## 03 添加链接

控制url

```jsx
<Link to="/invoices">Invoices</Link> | {" "}
<Link to="/expenses">Expenses</Link>
```

## 04 添加路由

响应url

```jsx
<BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}>
            <Route path="expenses" element={<Expenses/>}/>
            <Route path="invoices" element={<Invoices/>}/>
        </Route>
    </Routes>
</BrowserRouter>
```

## 05 嵌套路由
局部页面切换
```jsx
<Route path="/" element={<App/>}>
    <Route path="expenses" element={<Expenses/>}/>
    <Route path="invoices" element={<Invoices/>}/>
</Route>
```

App中添加

```jsx
<Outlet/>
```
