# react-router

## 01 安装

> npm install react-router-dom@6

## 02 接入URL

```jsx
    ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);
```

## 03 添加链接

```jsx
<Link to="/invoices">Invoices</Link> | {" "}
<Link to="/expenses">Expenses</Link>
```
