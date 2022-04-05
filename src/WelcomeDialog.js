import ReactDOM from "react-dom";
import React from "react";

export default () => {
    function FancyBorder(props) {
        return (
            <div className={'FancyBorder FancyBorder-' + props.color}>
                {props.children}
            </div>
        );
    }

    function Dialog(props) {
        return (
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                    {props.title}
                </h1>
                <p className="Dialog-message">
                    {props.message}
                </p>
            </FancyBorder>
        );
    }

    function WelcomeDialog() {
        return (
            <Dialog
                title="Welcome"
                message="Thank you for visiting our spacecraft!" />
        );
    }
    // function LogDialog() {
    //     return (
    //         <Dialog
    //             title="Log"
    //             message="Log!" />
    //     );
    // }

    ReactDOM.render(
        <WelcomeDialog/>,
        document.getElementById('root')
    );

}
