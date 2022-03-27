import ReactDOM from "react-dom";
import React from "react";

export default () => {

    function FancyBorder(props) {
        return (
            <div className={'FancyBorder FancyBorder-' + props.color}>
                <button>button</button>
                {props.children}
            </div>
        );
    }

    function WelcomeDialog() {
        return (
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                    Welcome
                </h1>
                <p className="Dialog-message">
                    Thank you for visiting our spacecraft!
                </p>
            </FancyBorder>
        );
    }

    ReactDOM.render(
        <WelcomeDialog/>,
        document.getElementById('root')
    );

}
