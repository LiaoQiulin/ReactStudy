import React from "react";
import ReactDOM from 'react-dom';

export default () => {

    function Form() {
        function handleSubmit(e) {
            console.log('You clicked submit.');
            e.preventDefault();
        }

        return (
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button>
            </form>
        );
    }

    ReactDOM.render(
        <Form/>,
        document.getElementById('root')
    );
}
