import React from 'react';
import styled from 'styled-components';
import HomeIcon from './icons/HomeIcon'


export default function NavBar() {
  return (
    <StyledFooter>
        <nav>
            <ul>
                    <li>
                        <HomeIcon />
                        <p>Home</p>
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
{/* <Link to="/">Home</Link>
<Link to="/">Balance</Link> */}