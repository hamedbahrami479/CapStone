import React, { useState } from 'react';
import ResultBox from './ResultBox';
import styled from 'styled-components';

function DropDown({ products }) {
  const [isSelected_DropDown, setIsSelected_DropDown] = useState('');

  return (
    <StyledDropDownContainer>
      <StyledLabel> The Best Handling for</StyledLabel>
      <label for="category-select"></label>
      <StyledSelect
        name="selectProduct"
        className="custom-select"
        id="category-select"
        value={isSelected_DropDown}
        onChange={e => setIsSelected_DropDown(e.target.value)}
      >
        <option value="" selected>
          What would you like to GIve Back?
        </option>
        <option value="Plasctic Transparent">Plastic Transparent</option>
        <option value="Plastic Black">Plastic Black</option>
        <option value="Aluminum">Aluminum</option>
        <option value="Aluminum Contaminated">Aluminum Contaminated</option>
        <option value="Paper Contaminated">Paper Contaminated</option>
        <option value="Paper Coated">Paper Coated</option>
        <option value="Paper Clean">Paper Clean</option>
        <option value="Automotive Supply">Automotive Supply</option>
        <option value="Glas">Glas</option>
      </StyledSelect>
      {/* ResultBox werden die props products und isSelected_DropDown übergeben: DropDown.js -> ResultBox.js */}
      {<ResultBox products={products} isSelected_DropDown={isSelected_DropDown} />}
    </StyledDropDownContainer>
  );
}

const StyledDropDownContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledSelect = styled.select`
  width: 75%;
  height: 20px;
  /* color: blue; */
  background-color: antiquewhite;
  margin: auto;
`;

const StyledLabel = styled.h1`
  font-size: 1rem;
`;
export default DropDown;
