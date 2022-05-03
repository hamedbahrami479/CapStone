import React from 'react'
import styled from 'styled-components'

const Name = () => {
    return( <NameStyles>Give It Back It`s worthit </NameStyles>
    );
};

const NameStyles = styled.h1`
height: 75px;
justify-content: center;
margin: 5px; 
border: 3px black solid;
align-items: center;
color: white;
background-color: green
`;
export default Name;