import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import logo from "../../../images/static-parts/logo.png";
export default function Footer() {
  return (
    <div>
      <div className="main_in_footer">
        <div className="nav_main_in_footer">
          <div className="nav_left_in_footer">
            <img id="logo" src={logo} alt="" />
          </div>
          <div className="nav_right_in_footer">
            <ul className="nav-ul">
              <NavLink
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="nav-li"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="nav-li"
                to="/dashboard"
              >
                dashboard
              </NavLink>
              <NavLink
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="nav-li"
                to="/listing"
              >
                Listing
              </NavLink>
              {/* <NavLink
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="nav-li"
            to="/blog"
          >
            Blog
          </NavLink> */}
              <NavLink
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="nav-li"
                to="/message-us"
              >
                Send Us Message
              </NavLink>
              <NavLink
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="nav-li"
                to="/team"
              >
                Team
              </NavLink>
            </ul>
          </div>
        </div>
      </div>

      <div className="body_in_footer">
        <div className="body_in_footer_container">
          <div className="top_in_footer">
            <div className="office">
              <h3 className="header_in_top">Office</h3>
              Germany — 329 Queensberry Street, North Melbourne VIC 3051
            </div>
            <div className="need_help">
              <h3 className="header_in_top">Need help</h3>
              <pre>
                +1 670 936 46 70 <br />
                <NavLink
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  id="help_page_link"
                  className="nav-li"
                  to="/request-help"
                >
                  help@spectron.com
                </NavLink>
              </pre>
            </div>
            <div className="opening_hours">
              <h3 className="header_in_top">OPENING HOURS</h3>
              <pre>
                Monday – Friday : 09:00AM – 09:00PM <br />
                Saturday : 09:00AM – 07:00PM <br />
                Sunday : Closed
              </pre>
            </div>
            <div className="keep_in_touch">
              <h3 className="header_in_top">KEEP IN TOUCH</h3>
              <div className="col-auto_in_touch">
                <input
                  className="form-control_in_touch"
                  placeholder="enter your Email"
                  type="email"
                />
                <button type="submit">GO</button>
              </div>
              Get latest updates and offers.
            </div>
          </div>
          <div className="bottom_in_footer">
            <p>Spectron Cars © 2023. All Rights Reserved</p>
            <div className="icon_in_footer">
              <FontAwesomeIcon
                className="header-icons"
                icon="fa-brands fa-github"
              />
              <FontAwesomeIcon
                className="header-icons"
                icon="fa-brands fa-facebook-f"
              />
              <FontAwesomeIcon
                className="header-icons"
                icon="fa-brands fa-instagram"
              />
              <FontAwesomeIcon
                className="header-icons"
                icon="fa-brands fa-linkedin-in"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
