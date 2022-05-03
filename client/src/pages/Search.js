import React,{ useState } from 'react';
import Name from './Components/Header'


function App() {

const [product, setProduct] = useState();

return (
<div>
    <h1>product</h1>
<select value={product} onChange={e=>setProduct(e.target.value)}>

<option></option>
<option>Plastic Transparent</option>
<option>Plastic Black</option>
<option>Aluminum</option>
<option>Aluminum Contaminated</option>
<option>Paper Contaminated</option>
<option>Paper Coated</option>

</select>
</div>
)
}





/*function chooseProduct(event) {
  const input = event.target.value;
  setInput(input);
}*/

/*return (
  <div className="App">
    <h1>What would you like to give back?</h1>
    <input onChange={chooseProduct} value={input} 
    placeholder="choose your Item">
    </input>
    <button onClick={Platzhalter}>Search</button>
  </div>
)


}*/