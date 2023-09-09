import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TeamCards() {
    return (
        <div className="teamcards-main">
            <div className="container">
                <img src="" alt="" />
                <div className="right-divs">
                    <div className="r-d-1"></div>
                    <div className="r-d-2"></div>
                </div>
                <div className="left-divs">
                    <div className="l-d-1"></div>
                    <div className="l-d-2"></div>
                </div>
                <p className="member-name">Ali Sanabani</p>
                <FontAwesomeIcon className="member-links" icon="fa-brands fa-github" />
                <FontAwesomeIcon className="member-links" icon="fa-brands fa-facebook-f" />
                <FontAwesomeIcon className="member-links" icon="fa-brands fa-instagram" />
                <FontAwesomeIcon className="member-links" icon="fa-brands fa-linkedin-in" />
            </div>
        </div>





    )
}

export default function OurAwesomTeam() {
    return (
        <div className="team-main">
            <h5 className="subheading">Meet our Expoert team</h5>
            <h1 className="heading">Our Awesome Team</h1>
            <TeamCards />


        </div>


    )
}