import React from 'react';
import styled from 'styled-components';
import HomeIcon from './icons/HomeIcon';
import BalanceIcon from './icons/BalanceIcon';
import DialogueIcon from './icons/DialogueIcon';

export default function NavBar() {
  return (
    <StyledFooter>
      <nav>
        <ul>
          <li>
            <HomeIcon />
            <p>Home</p>
          </li>
          <li>
            <BalanceIcon />
            <p>Your Balance</p>
          </li>
          <li>
            <DialogueIcon />
            <p>Not Found?</p>
          </li>
        </ul>
      </nav>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: lightgreen;
  display: flex;
  flex-direction: horizontal;
  align-items: center;
  height: 50px;
  position: sticky;
`;
{
  /* <Link to="/">Home</Link>
<Link to="/">Balance</Link> */
}
