import React from 'react'
import styled from 'styled-components'


export default function NavBar() {
return (
<StyledFooter>
    <nav>
        <ul>
            <li>
                
            </li>
        </ul>
    </nav>
</StyledFooter>

)
}





const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  & nav > ul {
    display: flex;
    justify-content: space-between;
  }
`