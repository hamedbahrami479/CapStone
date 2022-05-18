import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyled>
      <HgibStylesOne> - GIB - </HgibStylesOne>
      {/* <HgibStylesTwo>Give It Back</HgibStylesTwo> */}
    </HeaderStyled>
  );
};

const HgibStylesOne = styled.h1`
  font-size: 50px;
  margin-top: 0px;
  font-family: 'Courier New', Courier, monospace;

`;

const HgibStylesTwo = styled.p`
  font-size: 80 px;

`;
const HeaderStyled = styled.div`
  background-color: lightgreen;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
`;

export default Header;
