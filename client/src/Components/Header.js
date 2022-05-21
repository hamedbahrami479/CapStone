import React from 'react';
import styled from 'styled-components';
import VisionIcon from './icons/VisionIcon';
import MissionIcon from './icons/MissionIcon';

const Header = () => {
  return (
    <HeaderStyled>
      <IconWrapperH>
        <VisionIcon />
        <IconNameStyled>Vision</IconNameStyled>
      </IconWrapperH>
      <GIBStyles>GIB</GIBStyles>
      <IconWrapperH>
        <MissionIcon />
        <IconNameStyled>Mission</IconNameStyled>
      </IconWrapperH>
    </HeaderStyled>
  );
};

const GIBStyles = styled.h1`
  font-size: 70px;
  margin-top: 5px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 5;
  color: blue;
`;
const HeaderStyled = styled.div`
  background-color: lightgreen;
  display: flex;
  flex-direction: horizontal;
  justify-content: space-around;
  height: 10%;
`;

const IconNameStyled = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0;
`;

const IconWrapperH = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;
export default Header;
