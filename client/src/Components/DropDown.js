import React, { useState } from 'react';

function DropDown() {
  const [isSelected, setIsSelected] = useState();
  return (
    <div>
      <label for="category-select">Choose your category:</label>
      <br></br>
      <br></br>
      <select
        name="selectProduct"
        className="custom-select"
        id="category-select"
        value={isSelected}
        onChange={e => setIsSelected(e.target.value)}
      >
        <option value="" selected>
          --Please choose an Option--
        </option>
        <option value="Plasctic Transparent">Plastic Transparent</option>
        <option value="Plastic Black">Plastic Black</option>
        <option value="Aluminum">Aluminum</option>
        <option value="Aluminum Contaminated">Aluminum Contaminated</option>
        <option value="Paper Contaminated">Paper Contaminated</option>
        <option value="Paper Coated">Paper Coated</option>
        <option value="Paper Clean">Paper Clean</option>
      </select>
      <br></br>
      <br></br>
      {isSelected}
    </div>
  );
}

export default DropDown;
