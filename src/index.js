import reportWebVitals from './reportWebVitals';

import ReactDOM from "react-dom";
import React, {useEffect, useState} from "react";

function Form() {
    // 1. Use the name state variable
    const [name, setName] = useState('Mary');

    // 2. Use an effect for persisting the form
    // useEffect(function persistForm() {
    //     localStorage.setItem('formData', name);
    // });
    // if (name !== '') {
    //     useEffect(function persistForm() {
    //         localStorage.setItem('formData', name);
    //     });
    // }
    useEffect(function persistForm() {
        // 👍 We're not breaking the first rule anymore
        if (name !== '') {
            localStorage.setItem('formData', name);
        }
    });


    // 3. Use the surname state variable
    const [surname, setSurname] = useState('Poppins');

    // 4. Use an effect for updating the title
    useEffect(function updateTitle() {
        document.title = name + ' ' + surname;
    });
    return (<>
        <h4>{name}</h4>
        <button onClick={() => setName("")}>a=""</button>
    </>)
    // ...
}

ReactDOM.render(
    <Form/>,
    document.getElementById('root')
);

reportWebVitals();
