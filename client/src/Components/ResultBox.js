import React, { useState } from 'react';
import styled from 'styled-components';
import SearchButton from './Components/Button';
import { productData } from './Components/Daten';

function ResultBox({ productData}) {
  const [product, setProduct] = useState(false);

  return (
    <>
      {product ? (

        <InputContainer type="text" id="result" name="result">
<SearchButton onClick={() => setProduct(true)}>Search</SearchButton>
          <HandlingImage src={productHandling.image} alt={""}></HandlingImage></HandlingImage>

    
        </InputContainer>;

      ) : (
        
        ""

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
`
