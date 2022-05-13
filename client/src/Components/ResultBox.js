import React, { useState } from 'react';
import styled from 'styled-components';
import SearchButton from './Button';

const products = [
  {
    id: '1',
    productcategory: 'Plastic Transparent',
    handling: 'Yellow Bin',
    advice: '',
    image: require('./Picture/Yellow-Bin.png'),
  },

  {
    id: '2',
    productcategory: 'Plastic Black',
    handling: 'Yellow Bin',
    advice:
      'Did you know, sorting machines are not always able to sort out black plastic. But still: Put it into the yellow bin. But, maybe you can try to avoid black plastics?',
    image: require('./Picture/Yellow-Bin.png'),
  },

  {
    id: '3',
    productcategory: 'Aluminum',
    handling: 'Yellow Bin',
    advice: '',
    image: require('./Picture/Yellow-Bin.png'),
  },

  {
    id: '4',
    productcategory: 'Aluminum Contaminated',
    handling: 'Black Bin',
    advice: '',
    image: require('./Picture/Yellow-Bin.png'),
  },

  {
    id: '5',
    productcategory: 'Paper Contaminated',
    handling: 'Black Bin',
    advice: '',
    image: require('./Picture/Black-Bin.png'),
  },

  {
    id: '6',
    productcategory: 'Paper Coated',
    handling: 'Black Bin',
    advice: '',
    image: require('./Picture/Black-Bin.png'),
  },

  {
    id: '7',
    productcategory: 'Paper Clean',
    handling: 'Blue Bin',
    advice: '',
    image: require('./Picture/Blue-Bin.png'),
  },
];

const ResultBox = () => {
  const [isSelected, setIsSelected] = useState(false);
  const product = isSelected;
  const handling = products.filter(handling => product.handling);
  console.log(products);
  return (
    <InputContainer>
      <HandlingText>{handling}</HandlingText>
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
