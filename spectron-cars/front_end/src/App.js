import React from "react";
import { FontAwesomeIcon } from "./fontawesome";
//

import { Routes, Route, Link } from "react-router-dom";
import Body from "./Components/body-parts/body";
import CarouselBrands from "./Components/body-parts/CarouselBrands/CarouselBrands";
import Temp from "./Components/footer-parts/services-temp";
import ScrollToTop from "./Components/static-parts/scrolltotop";
import TopPart from "./Components/static-parts/top-part/topPart";
import Home from "./Components/Pages/home";
import SendUsMessage from "./Components/body-parts/SendUsMessage";
import Margin from "./Components/static-parts/margin";
import OurAwesomTeam from "./Components/body-parts/OurAwesomeTeam/OurAwesomeTeam";
import Footer from "./Components/footer-parts/footer/footer";
import Help from "./Components/Pages/help-page/help";
import CarTopology from "./Components/body-parts/CarTopoloy";
import RequestHelp from "./Components/body-parts/requesthelp";
import TempSlide from "./Components/body-parts/tempCard";
import Dashboard from "./Components/body-parts/dashboard";
function App() {
  return (
    <div className="app-main">
      {/* <Help /> */}
      <TopPart />
      <Margin />
      <ScrollToTop />
      {/* <Temp/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message-us" element={<SendUsMessage />} />
        <Route path="/team" element={<OurAwesomTeam />} />
        <Route path="/help" element={<Help />} />
        <Route path="/request-help" element={<RequestHelp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/pages" element={<Body />} /> */}
        {/* <Route path="/" element={<CarTopology />} /> */}
      </Routes>
      <CarouselBrands />
      <Footer />
      {/* <TempSlide /> */}
    </div>
  );
}

export default App;
