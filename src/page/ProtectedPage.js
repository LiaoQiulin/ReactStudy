import React from "react";
import {Link} from "react-router-dom";

export default function (props) {
    return <>
        <h1>ProtectedPage</h1>
        <Link to="/a">NoMatch</Link>
    </>
}
