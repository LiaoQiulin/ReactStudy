import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// const element = (
//     <h1 className="greeting">
//         Hello, world!
//     </h1>
// );

const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!?'
);


ReactDOM.render(
    element,
    document.getElementById('root')
);


reportWebVitals();
