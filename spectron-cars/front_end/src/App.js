import React from "react";
import { FontAwesomeIcon } from './fontawesome';
// 

import { Routes ,Route ,Link } from "react-router-dom";
import Nav from "./Components/static-parts/nav";
import Header from "./Components/static-parts/header";
import Body from "./Components/body-parts/body";
import CarTopology from "./Components/body-parts/CarTopoloy";
import PopularListing from "./Components/body-parts/popularListing";
import SendUsMessage from "./Components/body-parts/SendUsMessage";
import OurAwesomTeam from "./Components/body-parts/OurAwesomeTeam/OurAwesomeTeam";
import CarouselBrands from "./Components/body-parts/CarouselBrands/CarouselBrands";
import Temp from "./Components/footer-parts/services-temp";
import ScrollToTop from "./Components/static-parts/scrolltotop";

function App() {





  return (
    <div className="app-main"> 
      <div className="top-part">
        <ScrollToTop/>
        <Header />
        <Nav />
    <Routes>
    <Route path="/" element={ <Body /> }/>
    {/* <Route path="/explore" element={ <CarTopology /> }/>   */}
    {/* <Route path="/listing" element={ <Body /> }/> */}
    {/* <Route path="/blog" element={ <CarTopology /> }/>   */}
    {/* <Route path="/pages" element={ <Body /> }/> */}
    {/* <Route path="/" element={ <CarTopology /> }/>   */}
    </Routes>
        {/* <Body /> */}
      </div>
      <div className="body-part">
        <CarTopology />
        <PopularListing />
      </div>
      <div className="footer-part">
        <SendUsMessage />
        {/* <Temp/> */}
        <OurAwesomTeam />
      </div>
      
   
      {/* <CarouselBrands /> */}
    </div>
  );
}

export default App;
