import ReactDOM from "react-dom";
import React from "react";
import {
    BrowserRouter,
    Link,
    Routes,
    Route,
    Outlet,
    useParams,
    NavLink,
    useSearchParams,
    useLocation,
    useNavigate,
} from "react-router-dom";

export default () => {
    ReactDOM.render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="expenses" element={<Expenses/>}/>
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
                </Route>
                <Route
                    path="*"
                    element={
                        <main style={{padding: "1rem"}}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
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
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();
    let location = useLocation();
    return (
        <div style={{display: "flex"}}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem",
                }}
            >
                <input
                    value={searchParams.get("filter") || ""}
                    onChange={(event) => {
                        let filter = event.target.value;
                        if (filter) {
                            setSearchParams({filter});
                        } else {
                            setSearchParams({});
                        }
                    }}
                />
                {invoices
                    .filter((invoice) => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true;
                        let name = invoice.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map((invoice) => (
                        <InvoiceLink invoice={invoice} key={invoice.number}/>
                    ))}
            </nav>
            <Outlet/>
        </div>
    );
}

function InvoiceLink({invoice, ...props}) {
    let location = useLocation();
    let params = useParams();
    let isActive = params.invoiceId === invoice.number.toString();
    let navigate = useNavigate();
    return (
        <div>
            <button
                style={{color: isActive ? "red" : ""}}
                {...props}
                onClick={() => {
                    navigate(`/invoices/${invoice.number}` + location.search)
                }}
            >
                {invoice.name}
            </button>
        </div>
    )
}

function Invoice() {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    return (
        <main style={{padding: "1rem"}}>
            <h2>Total Due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>Due Date: {invoice.due}</p>
        </main>
    );
}


let invoices = [
    {
        name: "Santa Monica",
        number: 1995,
        amount: "$10,800",
        due: "12/05/1995",
    },
    {
        name: "Stankonia",
        number: 2000,
        amount: "$8,000",
        due: "10/31/2000",
    },
    {
        name: "Ocean Avenue",
        number: 2003,
        amount: "$9,500",
        due: "07/22/2003",
    },
    {
        name: "Tubthumper",
        number: 1997,
        amount: "$14,000",
        due: "09/01/1997",
    },
    {
        name: "Wide Open Spaces",
        number: 1998,
        amount: "$4,600",
        due: "01/27/1998",
    },
];

function getInvoices() {
    return invoices;
}

function getInvoice(number) {
    return invoices.find(
        (invoice) => invoice.number === number
    );
}
