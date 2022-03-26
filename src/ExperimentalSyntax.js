import React from "react";
import ReactDOM from 'react-dom';

export default () => {

    class LoggingButton extends React.Component {
        // This syntax ensures `this` is bound within handleClick.
        // Warning: this is *experimental* syntax.
        // handleClick = () => {
        //     console.log('this is:', this);
        // }

        handleClick = () => {
            console.log('this is:', this);
        }
        //
        // handleClick() {
        //     console.log('this is:', this);
        // }


        render() {
            return (
                <button onClick={this.handleClick}>
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
