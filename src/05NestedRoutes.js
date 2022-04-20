import ReactDOM from "react-dom";
import React from "react";
import {
    BrowserRouter,
    Link,
    Routes,
    Route,
    Outlet
} from "react-router-dom";

export default () => {
    ReactDOM.render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="expenses" element={<Expenses/>}/>
                    <Route path="invoices" element={<Invoices/>}/>
                </Route>
            </Routes>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

function App() {
    return (
        <div>
            <h1>Bookkeeper!</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/invoices">Invoices</Link> |{" "}
                <Link to="/expenses">Expenses</Link>
            </nav>
            <Outlet/>
        </div>
    );
}

function Expenses() {
    return (
        <main style={{padding: "1rem 0"}}>
            <h2>Expenses</h2>
        </main>
    );
}

function Invoices() {
    return (
        <main style={{padding: "1rem 0"}}>
            <h2>Invoices</h2>
        </main>
    );
}
