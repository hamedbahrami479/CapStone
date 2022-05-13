import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import DropDown from './Components/DropDown';
import SearchButton from './Components/Button';
import ResultBox from './Components/ResultBox';
import { products } from './Components/productData';

function App() {
  const [isSelected, setIsSelected] = useState();
  return (
    <body className="body">
      <form>
        <Header />
        <h1 className="question">What would You like to give back?</h1>
        <DropDown />
        <br></br>
        {isSelected}
        <br></br>
        <br></br>
        <SearchButton />
        <h2 className="handling">Best Handling would be:</h2>
        <label className="label" for="result"></label>
        <label className="label" htmlFor="result">
          {' '}
        </label>
        <br></br>
        <ResultBox products={products} />
      </form>
    </body>
  );
}
export default App;
