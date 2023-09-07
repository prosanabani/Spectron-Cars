import React from "react";
import { FontAwesomeIcon } from './fontawesome';
import Nav from "./Components/nav";
import Header from "./Components/header";
import Body from "./Components/body";
import CarTopology from "./Components/body-parts/carTopoloy";

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

      </div>
    </div>
  );
}

export default App;
