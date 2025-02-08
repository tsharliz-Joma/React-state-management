import {CounterButton} from "./components/CounterButton/CounterButton";
import {RecoilRoot} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <h1>State Management Example</h1>
      <CounterButton />
    </RecoilRoot>
  );
}

export default App;
