import React from "react";
import { FontAwesomeIcon } from './fontawesome';
import Nav from "./Components/nav";
import Header from "./Components/header";
import Body from "./Components/body";
import CarTopology from "./Components/body-parts/carTopoloy";
import PopularListing from "./Components/body-parts/popularListing";

function App() {
  return (
    <div className="app-main">
      <div className="top-part">
        <Header />
        <Nav />
        <Body />
      </div>
      <div className="body-part">
        <CarTopology />
        <PopularListing />

      </div>
    </div>
  );
}

export default App;
