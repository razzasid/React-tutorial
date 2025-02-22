import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1); // New state for input value

  const increment = () => {
    setCounter(counter + step); 
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - step); 
    }
  };

  const reset = () => {
    setCounter(0);
    setStep(1)
  };

  const handleStepChange = (e) => {
    const value = Number(e.target.value); 
    setStep(value >= 0 ? value : 1); 
  };

  return (
    <div>
      <div>
        <h1>{counter}</h1>
        <button className="btn" onClick={decrement}>
          -
        </button>
        <button className="btn" onClick={increment}>
          +
        </button>
      </div>
      <div className="input-div">
        <label htmlFor="input">Increment and decrement by: </label>
        <input
          type="number"
          id="input"
          value={step} 
          onChange={handleStepChange} 
          min="1" 
        />
      </div>
      <div>
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;