import {CounterButton} from "./components/CounterButton/CounterButton";
import {CounterProvider} from "./context/ContextProvider";

function App() {
  return (
    <CounterProvider>
      <h1>State Management Example</h1>
      <CounterButton />
    </CounterProvider>
  );
}

export default App;
