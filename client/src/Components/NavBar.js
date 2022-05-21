import React from 'react';
import styled from 'styled-components';
import HomeIcon from './icons/HomeIcon';
import BalanceIcon from './icons/BalanceIcon';
import DialogueIcon from './icons/DialogueIcon';

export default function NavBar() {
  return (
    <StyledFooter>
      <IconWrapperN>
        <DialogueIcon />
        <StyledIconLabel>Not Found?</StyledIconLabel>
      </IconWrapperN>
      <IconWrapperN>
        <HomeIcon />
        <StyledIconLabel>Home</StyledIconLabel>
      </IconWrapperN>
      <IconWrapperN>
        <BalanceIcon />
        <StyledIconLabel>Your Balance</StyledIconLabel>
      </IconWrapperN>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: lightgreen;
  display: flex;
  flex-direction: horizontal;
  height: 10%;
  position: sticky;
  justify-content: space-around;
`;

const IconWrapperN = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledIconLabel = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

{
  /* <Link to="/">Home</Link>
<Link to="/">Balance</Link> */
}
