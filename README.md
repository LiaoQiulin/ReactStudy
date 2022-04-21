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

## 06 发票列表

## 07 "无匹配"路由

```jsx
<Route
    path="*"
    element={
        <main style={{padding: "1rem"}}>
            <p>There's nothing here!</p>
        </main>
    }
/>
```

## 08 读取URL参数

#### 1. 控制

```jsx
<Link
    style={{display: "block", margin: "1rem 0"}}
    to={`/invoices/${invoice.number}`}
    key={invoice.number}
>
    {invoice.name}
</Link>
```

#### 2. 匹配

```jsx
<Route path="invoices" element={<Invoices/>}>
    <Route path=":invoiceId" element={<Invoice/>}/>
</Route>
```

#### 3. 读取

```jsx
let params = useParams();
```

## 09 索引路由

> 具有 index 属性而不是 path。那是因为索引路由共享父组件 path

```jsx
<Route path="invoices" element={<Invoices/>}>
    <Route
        index
        element={
            <main style={{padding: "1rem"}}>
                <p>Select an invoice</p>
            </main>
        }
    />
    <Route path=":invoiceId" element={<Invoice/>}/>
</Route>
```

## 10 活动链接

> <NavLink className={({ isActive }) => isActive ? "red" : "blue"} />

```jsx
<NavLink
    style={({isActive}) => {
        return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : "",
        };
    }}
    to={`/invoices/${invoice.number}`}
    key={invoice.number}
>
    {invoice.name}
</NavLink>
```

## 11 搜索参数

> "/login?success=1" or "/shoes?brand=nike&sort=asc&sortby=price"

#### 1. 引入

```jsx
let [searchParams, setSearchParams] = useSearchParams();
```

#### 2. 设置

```jsx
if (filter) {
    setSearchParams({filter});
} else {
    setSearchParams({});
}
```

#### 3. 获取

```jsx
let filter = searchParams.get("filter");
```

## 12 自定义行为

```jsx
function InvoiceLink({invoice, ...props}) {
    let location = useLocation();
    let params = useParams();
    let isActive = params.invoiceId === invoice.number.toString();
    return (
        <div>
            <Link
                style={{color: isActive ? "red" : ""}}
                to={`/invoices/${invoice.number}` + location.search}
                {...props}>
                {invoice.name}
            </Link>
        </div>
    )
}
```

## 13 编程式导航
```jsx
let navigate = useNavigate();
```
```jsx
<button
    style={{color: isActive ? "red" : ""}}
    {...props}
    onClick={() => {
        navigate(`/invoices/${invoice.number}` + location.search)
    }}>
    {invoice.name}
</button>
```
