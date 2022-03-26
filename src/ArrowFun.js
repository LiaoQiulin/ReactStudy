import React from "react";
import ReactDOM from 'react-dom';

export default () => {

    class LoggingButton extends React.Component {
        handleClick() {
            console.log('this is:', this);
        }

        render() {
            // This syntax ensures `this` is bound within handleClick
            return (
                <button onClick={() => this.handleClick()}>
                    Click me
                </button>
            );
        }
    }

    ReactDOM.render(
        <LoggingButton/>,
        document.getElementById('root')
    );
}
