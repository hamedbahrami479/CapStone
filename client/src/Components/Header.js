import React from 'react';
import styled from 'styled-components';
import VisionIcon from './icons/VisionIcon';
import MissionIcon from './icons/MissionIcon';

const Header = () => {
  return (
    <HeaderStyled>
      <VisionIcon />
      <GIBStyles>GIB</GIBStyles>
      <MissionIcon />
    </HeaderStyled>
  );
};

const GIBStyles = styled.h1`
  font-size: 50px;
  margin-top: 0px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 5;
  color: blue;
`;
const HeaderStyled = styled.div`
  background-color: lightgreen;
  display: flex;
  flex-direction: horizontal;
  justify-content: space-around;
  height: 50px;
`;

export default Header;
