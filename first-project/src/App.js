import {useState} from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(''); // Initialize count state variable with value 0

  const handleChange = (event) => {
    setCount(Number(event.target.value));
  };
 

  // Function to handle input change
  const increment_1 = () => {
    setCount(count + 1);
  };

  const decrement_1 = () => {
    setCount(count - 1);
  };

  const increment_10 = () => {
    setCount(count + 10);
  };

  const decrement_10 = () => {
    setCount(count - 10);
  };

 

  return (
    <form>
    <input type="number" value={count} onChange={handleChange} />
    <p>Input the value: {setCount} {count}</p>

    
    <div className="form">
      <h1>{count}</h1>
      <div class="ab">
      <button
      style={{
        fontSize: 32,
      }}
      onClick={increment_1}
      >
        +1
      </button>
      </div>
      <br></br>

      <div class="ab">
      <button
      style={{
        fontSize: 32,
      }}
      onClick={decrement_1}
      >
        -1
      </button>
      </div>
      <br></br>

      <div class="ab">
      <button
      style={{
        fontSize: 32,
      }}
      onClick={increment_10}
      >
        +10
      </button>
      </div>
      <br></br>
      

      <div class="ab">
      <button
      style={{
        fontSize: 32,
      }}
      onClick={decrement_10}
      >
        -10
      </button>
      </div>

      </div>
      </form>
  );
}

export default App;
