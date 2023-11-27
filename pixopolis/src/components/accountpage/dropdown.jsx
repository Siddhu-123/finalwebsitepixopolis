import React, { useState } from 'react';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Recently received");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {selectedOption}
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <li onClick={() => handleOptionClick("Recently received")}>Recently received</li>
        <li onClick={() => handleOptionClick("Price high to low")}>Price high to low</li>
        <li onClick={() => handleOptionClick("Price low to high")}>Price low to high</li>
        <li onClick={() => handleOptionClick("Oldest")}>Oldest</li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
