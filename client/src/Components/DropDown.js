import React, { useState } from 'react';
import ResultBox from './ResultBox';

function DropDown({ products }) {
  const [isSelected_DropDown, setIsSelected_DropDown] = useState('');

  return (
    <div>
      <label for="category-select">Choose your category:</label>
      <br></br>
      <br></br>
      <select
        name="selectProduct"
        className="custom-select"
        id="category-select"
        value={isSelected_DropDown}
        onChange={e => setIsSelected_DropDown(e.target.value)}
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
      {/* ResultBox werden die props products und isSelected_DropDown übergeben: DropDown.js -> ResultBox.js */}
      { <ResultBox products={products} isSelected_DropDown={isSelected_DropDown} />}
      <br></br>
      <br></br>
    </div>
  );
}

export default DropDown;
