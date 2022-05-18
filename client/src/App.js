import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import DropDown from './Components/DropDown';
import NavBar from './Components/NavBar'
import ResultBox from './Components/ResultBox';
import { products } from './Components/productData';
import ProfilePicture from '../src/Components/Picture/ProfilePicture.png';

function App() {
  return (
    <div className="body">
      <form>
        <Header />
        <article className="ContainerPic">
          <img
            className="ProfilePicture"
            src={ProfilePicture}
            alt="better be a pic"
            width="90%"
            height="30%"
          />
        </article>
        <DropDown products={products} />
        <NavBar />
      </form>
    </div>
  );
}

export default App;
