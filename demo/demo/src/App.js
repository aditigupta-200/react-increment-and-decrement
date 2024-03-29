import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount10] = useState(0);

  return (
    <div className="App">
      <div className="text">
        <h1>Email</h1>
        <input className="box" type="text" value={count} />
      </div>
      <div className="card">
        <button onClick={() => setCount10((count) => count + 1)}>+1</button>
        <button onClick={() => setCount10((count) => count - 1)}>-1</button>

        <button onClick={() => setCount10((count) => count + 10)}>+10</button>

        <button onClick={() => setCount10((count) => count - 10)}>-10</button>
      </div>
    </div>
  );
}

export default App;
