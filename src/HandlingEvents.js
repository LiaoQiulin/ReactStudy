import React from "react";
import ReactDOM from 'react-dom';

export default () => {

    function activateLasers() {
        console.log("activateLasers")
    }

    ReactDOM.render(
        <button onClick={activateLasers}>
            Activate Lasers
        </button>,
        document.getElementById('root')
    );
}
