import ReactDOM from 'react-dom';
import React, {useState,useEffect} from 'react';

export default () => {

    function Example() {
        const [count, setCount] = useState(0);

        useEffect(() => {
            console.log("组件初始化或更新")
            return function (){
                console.log("组件销毁")
            }
        });

        return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>
        );
    }

    ReactDOM.render(
        <Example/>,
        document.getElementById('root')
    );
}
