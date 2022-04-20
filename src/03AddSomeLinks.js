import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter, Link} from "react-router-dom";

export default () => {
    ReactDOM.render(
        <BrowserRouter>
            <App/>
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
        </div>
    );
}
