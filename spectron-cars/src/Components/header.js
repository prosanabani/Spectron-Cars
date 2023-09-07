import React from "react";
import { FontAwesomeIcon } from '../fontawesome';


export default function Header() {



    ////////////////////////////////////////
    return (
        <div className="header-main">
            <div className="header-left">
                <p><span><FontAwesomeIcon icon="fa-solid fa-phone" /></span>1-800-458--5689</p>
                <p><span><FontAwesomeIcon icon="fa-solid fa-map" /></span>tunis street </p>
                {/* <p>Curuent day</p> */}
            </div>
            <div className="header-right">
                <FontAwesomeIcon className="header-icons" icon="fa-brands fa-github" />
                <FontAwesomeIcon className="header-icons" icon="fa-brands fa-facebook-f" />
                <FontAwesomeIcon className="header-icons" icon="fa-brands fa-instagram" />
                <FontAwesomeIcon className="header-icons" icon="fa-brands fa-linkedin-in" />
                <button className="login">Login</button>
                <button className="register">Register</button>
            </div>
        </div>

    );
}