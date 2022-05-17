import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import DropDown from './Components/DropDown';

import ResultBox from './Components/ResultBox';
import { products } from './Components/productData';
import ProfilePicture from '../src/Components/Picture/ProfilePicture.png';

function App() {
  return (
    <div className="body">
      <form>
        <Header />
        <h1 className="question">What would You like to give back?</h1>
        <article className="ContainerPic">
          <img
            className="Profile-Picture"
            src={ProfilePicture}
            alt="better be a pic"
            width="90%"
            height="30%"
          />
        </article>
        <br></br>
        <DropDown products={products} />
        <br></br>
        <label className="label" for="result"></label>
        <label className="label" htmlFor="result">
          {' '}
        </label>
        <br></br>
      </form>
      </div>
  );
}
export default App;
