import React from 'react';
import styled from 'styled-components';
import HomeIcon from './icons/HomeIcon';
import BalanceIcon from './icons/BalanceIcon';
import DialogueIcon from './icons/DialogueIcon';

export default function NavBar() {
  return (
    <StyledFooter>
      <IconWrapper>
        <DialogueIcon />
        {/* <StyledIconLabel>Not Found?</StyledIconLabel> */}
      </IconWrapper>
      <IconWrapper>
        <HomeIcon />
        {/* <StyledIconLabel>Home</StyledIconLabel> */}
      </IconWrapper>
      <IconWrapper>
        <BalanceIcon />
        {/* <StyledIconLabel>Your Balance</StyledIconLabel> */}
      </IconWrapper>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: lightgreen;
  display: flex;
  flex-direction: horizontal;
  justify-content: space-around;
  height: 50px;
  position: sticky;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledIconLabel = styled.p`
  font-size: 0.8;
`;
{
  /* <Link to="/">Home</Link>
<Link to="/">Balance</Link> */
}
