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

function App() {
  return (
    <div className="app-main">
      <TopPart />

      <ScrollToTop />
      {/* <Temp/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/explore" element={ <CarTopology /> }/>   */}
        {/* <Route path="/listing" element={ <Body /> }/> */}
        {/* <Route path="/blog" element={ <CarTopology /> }/>   */}
        {/* <Route path="/pages" element={ <Body /> }/> */}
        {/* <Route path="/" element={ <CarTopology /> }/>   */}
      </Routes>
      {/* <CarouselBrands /> */}
    </div>
  );
}

export default App;
