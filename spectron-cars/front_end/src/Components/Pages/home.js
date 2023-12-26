import React from "react";
import Body from "../body-parts/body";
import CarTopology from "../body-parts/CarTopoloy";
import PopularListing from "../body-parts/popularListing";
import SendUsMessage from "./SendUsMessage";
import OurAwesomTeam from "./OurAwesomeTeam";

export default function Home() {
  return (
    <div className="home_main">
      <Body />
      <CarTopology />
      <PopularListing />
      <SendUsMessage />
      <OurAwesomTeam />
    </div>
  );
}
