import './App.scss';
import Counter from './components/Counter';
import React, { useState } from 'react';


const App = () => {
  const [reset, setReset] = useState(false)
    const handleClickBorrar = () => {
        setReset(true)
    }

  return (
    <div className="contador-container">
      <Counter reset={reset}/>
      <Counter reset={reset}/>
      <Counter reset={reset}/>

      <button className="reset-button" onClick={handleClickBorrar}>
            Reset All
        </button>
    </div>
  );
}

export default App;
