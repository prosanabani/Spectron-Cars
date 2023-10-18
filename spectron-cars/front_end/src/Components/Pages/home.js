import React from "react";
import Body from "../body-parts/body";
// import CarTopology from "../body-parts/CarTopoloy";
import PopularListing from "../body-parts/popularListing";
import SendUsMessage from "../body-parts/SendUsMessage";
import OurAwesomTeam from "../body-parts/OurAwesomeTeam/OurAwesomeTeam";

export default function Home() {
  return (
    <div className="home_main">
      <Body />
      {/* <CarTopology /> */}
      <PopularListing />
      <SendUsMessage />
      <OurAwesomTeam />
    </div>
  );
}
