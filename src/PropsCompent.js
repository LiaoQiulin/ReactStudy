import ReactDOM from "react-dom";
import React from "react";

export default () => {

    function SplitPane(props) {
        return (
            <div className="SplitPane">
                <div className="SplitPane-left">
                    {props.left}
                </div>
                <div className="SplitPane-right">
                    {props.right}
                </div>
            </div>
        );
    }

    function App() {
        return (
            <SplitPane
                left={
                    <button>Left:Contacts</button>
                }
                right={
                    <button>right:Chat</button>
                } />
        );
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );

}
