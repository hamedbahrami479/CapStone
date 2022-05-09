import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return( <HeaderStyled>
        <HgibStylesOne>Give It Back </HgibStylesOne>
        <HgibStylesTwo>It`s worthit</HgibStylesTwo>
        <hr></hr>
        </HeaderStyled>
    );
};

const HgibStylesOne = styled.h1`
justify-content: center;
text-align: center;
`;

const HgibStylesTwo = styled.h1`
justify-content: center;
text-align: center;
font-size: 40 px;
`
const HeaderStyled = styled.div`
background-color: green;
`

export default Header;