import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../body-parts/OurAwesomeTeam/OurAwesomeTeam-data";

function TeamCards(props) {
  return (
    <div className="teamcards-main">
      <div className="container">
        <img id="team-member-img" src={props.img} alt="" />
        <div className="overlay-div">
          <div className="right-divs">
            <div className="r-d-1"></div>
            <div className="r-d-2"></div>
          </div>
          <div className="left-divs">
            <div className="l-d-1"></div>
            <div className="l-d-2"></div>
          </div>
          <div className="pop-up-div">
            <p className="member-name">{props.name}</p>
            <div className="mem-link-div">
              <FontAwesomeIcon id="member-links" icon="fa-brands fa-github" />
              <FontAwesomeIcon
                id="member-links"
                icon="fa-brands fa-facebook-f"
              />
              <FontAwesomeIcon
                id="member-links"
                icon="fa-brands fa-instagram"
              />
              <FontAwesomeIcon
                id="member-links"
                icon="fa-brands fa-linkedin-in"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OurAwesomTeam() {
  let Cards = data.map((item) => <TeamCards {...item} />);
  return (
    <div className="team-main">
      <h5 className="subheading">Meet our Expert team</h5>
      <h1 className="heading">Our Awesome Team</h1>
      <div className="card-container">{Cards}</div>
    </div>
  );
}
