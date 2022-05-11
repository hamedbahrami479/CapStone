import React, { useState } from 'react';
import styled from 'styled-components';
import productHandling from './Daten';

function ResultBox({ productHandling }) {
  const [product, setProduct] = useState(false);
  return <InputContainer type="text" id="result" name="result">

    
  </InputContainer>;
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
