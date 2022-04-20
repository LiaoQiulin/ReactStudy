import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";

export default () => {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

function App() {
    return (
        <div>
            <h1>Bookkeeper!</h1>
        </div>
    );
}
