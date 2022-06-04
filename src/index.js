import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import App from "./App";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
    <BrowserRouter basename='/app'>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

//     location = /app {
//     root /var/www/myapp/build;
//     try_files /index.html =404;
//     }
//     location ~ ^/app(.*) {
//     root /var/www/myapp/build;
//     try_files $1 $1/ /index.html =404;
//     }

reportWebVitals();
