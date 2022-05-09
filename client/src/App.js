import React, { useState } from 'react';
import './App.css';
import HGIB from './Components/Header';
import DropDown from './Components/DropDown';
import SearchButton from './Components/Button';
import ResultBox from './Components/ResultBox';


function App() {
  const [product, setProduct] = useState();
  return (
    <body className="body">
      <form>
        <HGIB />
        <h1 className="question">What would You like to give back?</h1>
        <DropDown />
        <br></br>
        {product}
        <br></br>
        <br></br>
        <SearchButton />
        <h2 className="handling">Best Handling would be:</h2>
        <label className="label" for="result">
          {' '}
        </label>
        <br></br>
        <ResultBox />
      </form>
    </body>
  );
}
export default App;
