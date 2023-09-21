import React from "react";
import { FontAwesomeIcon } from '../fontawesome';



export default function Nav() {



    ////////////////////////////////////////////
    return (

        <div className="nav-main">
            <div className="nav-left">
                <img id="logo" src="" alt="" />
                <h3 id="name">Spectron Cars</h3>
            </div>
            <div className="nav-right">
                <ul className="nav-ul">
                    <li className="nav-li">Home</li>
                    <li className="nav-li">Explore</li>
                    <li className="nav-li">Listing</li>
                    <li className="nav-li">blog</li>
                    <li className="nav-li">Shop</li>
                    <li className="nav-li">pages</li>
                </ul>
                <button className="nav-add-listing"> + Add listing</button>
                <button className="ham-menu"><FontAwesomeIcon icon="fa-solid fa-bars" /></button>
            </div>
        </div>
    );
}