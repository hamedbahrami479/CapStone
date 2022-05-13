import React, { useState } from 'react';
import styled from 'styled-components';
import SearchButton from './Button';



function ResultBox ({products, isSelected} ) {
  console.log(isSelected)
  const product = isSelected;
  products.filter(handling => product.handling);
  return (
    <InputContainer>
      <HandlingText>irgendwas</HandlingText>
      <HandlingImage></HandlingImage>
    </InputContainer>
  );
};

// id: '1',
// productcategory: 'Plastic Transparent',
// handling: 'Yellow Bin',
// advice: '',
// image: require('./Picture/Yellow-Bin.png'),

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

const HandlingImage = styled.image`
  width: 75%;
`;

const HandlingText = styled.h1`
  font-size: 2rem;
`;

const StyledHandling = styled.p``;

/*function ResultBox({ product }) {
  const [isSelected, setIsSelected] = useState(false);
  /*const product = products.filter(product => isSelected);
  return (
    <>
      {isSelected ? (
        <>
          <InputContainer>
            <p>products.filter(handling => product.handling = isSelected )</p>
          </InputContainer>
          <HandlingImage src={product.image} alt={''}></HandlingImage>
          <HandlingText src={product.handling}></HandlingText>
        </>
      ) : (
        <h1> No Category Selected</h1>
      )}
    </>
  );
} */
