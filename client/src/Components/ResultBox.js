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
  console.log('Output handling', product_handling);

  const product_image = productData
    .filter(data => data.productcategory === isSelected_DropDown)
    .map(data => data.image);
  console.log('test B', product_image);

  const product_advice = productData
    .filter(data => data.productcategory === isSelected_DropDown)
    .map(data => data.advice);

  return (
    <>
      <StyledContainer>
        <br></br>
        <br></br>
        <Heading>Best Handling would be:</Heading>
        <Handling>{product_handling}</Handling>
        <HandlingImage src={product_image} alt={''}></HandlingImage>
        <InputContainer>
          <HandlingAdvice>{product_advice}</HandlingAdvice>
        </InputContainer>
      </StyledContainer>
    </>
  );
}
{
}
export default ResultBox;

const Heading = styled.h2`
  font-size: 1rem;
  margin: auto;
  display: block;
  justify-content: center;
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
  border-radius: 2rem;
  height: 10rem;
  width: 90%;
  margin: auto;
  display: block;
  display: flex;
  flex-direction: horizontal;
  align-items: center;
  justify-content: space-between;
`;
// tag image gegen img ausgetauscht <-----------
const HandlingImage = styled.img`
  width: 20%;
  text-align: left;
`;

const Handling = styled.h1`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: serif;
`;

const HandlingAdvice = styled.p`
  font-size: 1rem;
  justify-content: flex-end;
  text-align: left;
`;
