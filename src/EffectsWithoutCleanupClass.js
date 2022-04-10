import ReactDOM from 'react-dom';
import React, {useState,useEffect} from 'react';

export default () => {

    class Example extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
        }

        componentDidMount() {
            console.log("组件初始化")
        }
        componentDidUpdate() {
            console.log("组件更新")
        }

        render() {
            return (
                <div>
                    <p>You clicked {this.state.count} times</p>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                        Click me
                    </button>
                </div>
            );
        }
    }

    ReactDOM.render(
        <Example/>,
        document.getElementById('root')
    );
}
