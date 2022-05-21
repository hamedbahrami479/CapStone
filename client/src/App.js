import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import DropDown from './Components/DropDown';
import NavBar from './Components/NavBar';
import ResultBox from './Components/ResultBox';
import { products } from './Components/productData';
import ProfilePicture from '../src/Components/Picture/ProfilePicture.png';
import styled from 'styled-components';

function App() {
  return (
    <div className="body">
      <Header />
      <article className="ContainerPic">
        <img
          className="ProfilePicture"
          src={ProfilePicture}
          alt="better be a pic"
        />
      </article>
      <DropDown products={products} />
      <NavBar />
    </div>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
