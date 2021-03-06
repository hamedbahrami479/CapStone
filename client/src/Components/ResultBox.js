import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function ResultBox({ products, isSelected_DropDown }) {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setProductData(products);
  });

  const product_handling = productData
    .filter(data => data.productcategory === isSelected_DropDown)
    .map(data => data.handling);

  const product_image = productData
    .filter(data => data.productcategory === isSelected_DropDown)
    .map(data => data.image);

  const product_advice = productData
    .filter(data => data.productcategory === isSelected_DropDown)
    .map(data => data.advice);

  return (
    <>
      <StyledContainer>
        <Heading>Would be:</Heading>
        <Handling>{product_handling}</Handling>
        <HandlingImage src={product_image} alt={''}></HandlingImage>
        <InputContainer>{product_advice}</InputContainer>
      </StyledContainer>
    </>
  );
}
{
}
export default ResultBox;

const Heading = styled.h2`
  font-size: 1rem;
  justify-content: center;
  margin: 0.7rem;
`;

const StyledContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.section`
  size: 10ch;
  background-color: lightgray;
  border-radius: 1rem;
  height: 6rem;
  min-width: 95vw;
  margin: auto;
  display: block;
  display: flex;
  flex-direction: horizontal;
  align-items: center;
  justify-content: space-between;
  border: 2.5px solid white;
`;

const HandlingImage = styled.img`
  width: 20%;
  border-radius: 10rem;
  border: 1px solid white;
  justify-items: flex-end;
`;

const Handling = styled.h1`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Courier New', Courier, monospace;
  margin: 0.5rem;
`;
