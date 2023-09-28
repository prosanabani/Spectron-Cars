import React from "react";
import { FontAwesomeIcon } from './fontawesome';
import Nav from "./Components/nav";
import Header from "./Components/header";
import Body from "./Components/body";
import CarTopology from "./Components/body-parts/carTopoloy";
import PopularListing from "./Components/body-parts/popularListing";
import SendUsMessage from "./Components/footer-part/SendUsMessage";
import OurAwesomTeam from "./Components/body-parts/OurAwesomeTeam";
import CarouselBrands from "./Components/body-parts/CarouselBrands/CarouselBrands";
import Temp from "./Components/footer-part/services-temp";

function App() {
  return (
    <div className="app-main">
      {/* <div className="top-part">
        <Header />
        <Nav />
        <Body />
      </div>
      <div className="body-part">
        <CarTopology />
        <PopularListing />
      </div> */}
      <div className="footer-part">
        <SendUsMessage />
        {/* <Temp/> */}
        {/* <OurAwesomTeam /> */}
      </div>
      {/* <CarouselBrands /> */}
    </div>
  );
}

export default App;