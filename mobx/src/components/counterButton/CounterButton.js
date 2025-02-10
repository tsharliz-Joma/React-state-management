import {useState} from "react";
import {observer} from "mobx-react-lite";

// This observer makes sure our component renders at the correct time when the state of the counter changes
export const CounterButton = observer(({counter}) => {
  const [incrementBy, setIncrementBy] = useState(1);

  return (
    <>
      <p>You have clicked the button {counter.numberOfClicks} times.</p>
      <label>
        Increment By:
        <input
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
          type="number"
        />
      </label>
      <button onClick={() => counter.increment(incrementBy)}>Click</button>
    </>
  );
});
