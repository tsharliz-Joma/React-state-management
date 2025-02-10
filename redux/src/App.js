import { CounterButton } from "./components/CounterButton/CounterButton";
import {Provider} from "react-redux";
import {store} from "./store/store";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <h1>State Management Example</h1>
      <CounterButton />
    </Provider>
  );
};

export default App;
