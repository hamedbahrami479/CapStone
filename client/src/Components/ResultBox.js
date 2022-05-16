import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchButton from './Button';



function ResultBox({ products, isSelected_DropDown }) {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setProductData(products);
  });

  const product_handling = productData
    .filter(data => data.productcategory === isSelected_DropDown)
    .map(data => data.handling);
  console.log('Output handling', product_handling);

  const product_image = productData
    .filter(data => data.productcategory === isSelected_DropDown)
    .map(data => data.image);
  console.log('test B', product_image);

  const product_advice = productData
    .filter(data => data.productcategory === isSelected_DropDown)
    .map(data => data.advice)

  return (
    <>
    <br></br>
    <button>Search</button>
    <br></br>
    {isSelected_DropDown}
    <h2 className="handling">Best Handling would be:</h2>
    <InputContainer>
      <Handling>{product_handling}</Handling>
      <HandlingImage src={product_image} alt={''}></HandlingImage>
      <HandlingAdvice>{product_advice}</HandlingAdvice>
      </InputContainer>
    </>
  );
}

export default ResultBox;

const InputContainer = styled.section`
  size: 10ch;
  background-color: rgb(0, 225, 255);
  border-radius: 2rem;
  height: 10rem;
  width: 80%;
  margin: auto;
  display: block;
`;
// tag image gegen img ausgetauscht <-----------
const HandlingImage = styled.img`
  width: 10%;
`;

const Handling = styled.h1`
  font-size: 2rem;
`;

const HandlingAdvice = styled.p`
font-size: 1rem;
`;
