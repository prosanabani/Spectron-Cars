import React from "react";
import { FontAwesomeIcon } from "../../../fontawesome";
import { NavLink } from "react-router-dom";
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
          <NavLink className="nav-li" to="/">
            Home
          </NavLink>
          <NavLink className="nav-li" to="/help">
            help
          </NavLink>
          <NavLink className="nav-li" to="/listing">
            Listing
          </NavLink>
          <NavLink className="nav-li" to="/blog">
            Blog
          </NavLink>
          <NavLink className="nav-li" to="/message-us">
            Send Us Message
          </NavLink>
          <NavLink className="nav-li" to="/team">
            Team
          </NavLink>
        </ul>
        <button className="nav-add-listing"> + Add listing</button>
        <button className="ham-menu">
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </button>
      </div>
    </div>
  );
}
