import React from "react";
import { FontAwesomeIcon } from '../fontawesome';


export default function Header() {



    ////////////////////////////////////////
    return (
        <div className="header-main">
            <div className="header-left">
                <FontAwesomeIcon icon="fa-solid fa-bug" />
                <p>1-800-458--5689</p>
                <p>tunis street </p>
                {/* <p>Curuent day</p> */}
            </div>
            <div className="header-right">
                <button className="login">Login</button>
                <button className="register">Register</button>
            </div>
        </div>

    );
}