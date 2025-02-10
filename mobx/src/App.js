import {CounterButton} from "./components/counterButton/CounterButton";
import { Counter } from "./counter";

// Instance of the counter class
const counter = new Counter();

function App() {
  return (
    <>
      <h1>State Management Example</h1>
      <CounterButton counter={counter}/>
    </>
  );
}

export default App;
