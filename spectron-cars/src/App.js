import React from "react";
import { FontAwesomeIcon } from './fontawesome';
import Nav from "./Components/nav";
import Header from "./Components/header";

function App() {
  return (
    <div className="app-main">
      <div className="top-part">
        <Header />
        <Nav />
      </div>

    </div>
  );
}

export default App;
