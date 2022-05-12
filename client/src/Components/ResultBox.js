import React, { useState } from 'react';
import styled from 'styled-components';
import SearchButton from './Button';
import productData from './Daten'

function ResultBox({ productData }) {
  const [product, setProduct] = useState(false);

  return (
    <>
      {product ? (
          <InputContainer id="result" name="result"/>
            <SearchButton onClick={() => setProduct(true)}></SearchButton>
              <HandlingImage src={productData.image} alt={''}></HandlingImage>
              <HandlingText src={productData.handling}></HandlingText>
          <InputContainer />
      ) : (
        <h1> No Category Selected</h1>
      )}
    </>
  );
}

export default ResultBox;

const InputContainer = styled.input`
  size: 10ch;
  background-color: rgb(0, 225, 255);
  border-radius: 2rem;
  height: 10rem;
  width: 80%;
  margin: auto;
  display: block;
`;

const HandlingImage = styled.image`
  width: 75%;
`;

const HandlingText = styled.h1`
  font-size: 2rem;
`;
