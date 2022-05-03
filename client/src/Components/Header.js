import React from 'react';
import styled from 'styled-components';

const HGIB = () => {
  return (
    <Header>
      <HgibStylesOne>Give It Back </HgibStylesOne>
      <HgibStylesTwo>It`s worthit</HgibStylesTwo>
      <hr></hr>
    </Header>
  );
};

const HgibStylesOne = styled.h1`
  justify-content: center;
  text-align: center;
`;

const HgibStylesTwo = styled.h1`
  justify-content: center;
  text-align: center;
  font-size: large;
`;
const Header = styled.div`
  background-color: green;
`;

export default HGIB;
