import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import HomeIcon from './icons/HomeIcon'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <StyledFooter>
        <nav>
            <ul>
                <NavLink>
                    <li>
                        <HomeIcon />
                        <p>Home</p>
                    </li>
                </NavLink>
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