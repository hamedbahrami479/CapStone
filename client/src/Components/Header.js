import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return( <HeaderStyled>
        <HgibStylesOne>Give It Back </HgibStylesOne>
        <HgibStylesTwo>It`s worthit</HgibStylesTwo>
        </HeaderStyled>
    );
};

const HgibStylesOne = styled.h1`
justify-content: center;
text-align: center;
`;

const HgibStylesTwo = styled.p`
justify-content: center;
text-align: center;
font-size: 60 px;
`
const HeaderStyled = styled.div`
background-color: lightgreen;
`

export default Header;