import React from "react";
import { FontAwesomeIcon } from '../fontawesome';
import { Link } from "react-router-dom";


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
                <Link className="nav-li" to ="/">Home</Link> 
                <Link className="nav-li" to ="/explore">Explore</Link>
                <Link className="nav-li" to ="/listing">Listing</Link> 
                <Link className="nav-li" to ="/blog">Blog</Link>
                <Link className="nav-li" to ="/shop">Shop</Link> 
                <Link className="nav-li" to ="/pages">Pages</Link>
                </ul>
                <button className="nav-add-listing"> + Add listing</button>
                <button className="ham-menu"><FontAwesomeIcon icon="fa-solid fa-bars" /></button>
            </div>
        </div>
    );
}