import React, { useState } from 'react';

function NumericInput({ label }) {
  const [value, setValue] = useState(0);

  return (
    <div className="d-flex align-items-center my-3">
      <input 
        className="form-control text-center mx-3" 
        style={{width: '200px'}} 
        type="text" 
        value={label} 
        disabled 
      />
      <button className="btn btn-danger" onClick={() => setValue(value - 1)}>-</button>
      <input 
        className="form-control text-center mx-3" 
        style={{width: '200px'}} 
        type="text" 
        value={value}  
      />
      <button className="btn btn-success" onClick={() => setValue(value + 1)}>+</button>
    </div>
  );
}
  

export default NumericInput;