import React from "react";
import Dropdown from "./Dropdown";
import "../src/CSS/App.css";
const App = () => {
  const dropdownItems = ["Yes", "Probably Not"];

  return (
    <div className="app-container">
      <div className="box-container">
        <h1>Should you use A Dropdown ?</h1>
        <Dropdown items={dropdownItems} />
      </div>
    </div>
  );
};

export default App;
