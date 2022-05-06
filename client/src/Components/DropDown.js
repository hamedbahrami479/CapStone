import React, { useState } from 'react';

function DropDown() {
  const [product, setProduct] = useState();
  return (
    <div>
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
        <option>Paper Clean</option>
      </select>
    </div>
  );
}

export default DropDown;
