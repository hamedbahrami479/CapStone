import './App.css';
import React, { useState } from 'react';
/*import Name from './Components/Header'*/

function App() {
  const [product, setProduct] = useState();

  return (
    <body className="body">
      <form>
        <h1>What would You like to give back?</h1>
        <select
          className="custom-select"
          id="SelectID"
          value={product}
          onChange={e => setProduct(e.target.value)}
        >
          <option>Select an Option</option>
          <option>Plastic Transparent</option>
          <option>Plastic Black</option>
          <option>Aluminum</option>
          <option>Aluminum Contaminated</option>
          <option>Paper Contaminated</option>
          <option>Paper Coated</option>
        </select>
        <br></br>
        <br></br>
        {product}
        <br></br>
        <br></br>
        <button>Search</button>
        <h2>Best Handling would be:</h2>
        <label for="result">Close the Circle</label>
        <br></br>
        <br></br>
        <input type="text" id="handling" name="result"></input>
      </form>
    </body>
  );
}
export default App;
