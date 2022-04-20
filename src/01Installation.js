import ReactDOM from "react-dom";
import React from "react";


export default () => {
    ReactDOM.render(
        <App/>,
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
