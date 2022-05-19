import React,{ useState } from 'react';
import Name from './Components/Header'
import App from './client/src/'


function App() {


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





