// Dropdown.js
import React, { useState } from "react";
import "../src/CSS/dropdown.css";

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    console.log("Dropdown toggled");
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    console.log(`Selected item: ${item}`);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown-container ${isOpen ? "open" : "closed"}`}>
      <button className="dropdown-button" onClick={handleToggle}>
        Select
        <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
      </button>
      {isOpen && (
        <div>
          <ul className="dropdown-list">
            {items.map((item) => (
              <li key={item} onClick={() => handleItemClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
