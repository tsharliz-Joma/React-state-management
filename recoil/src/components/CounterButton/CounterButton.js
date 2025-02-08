import {useState} from "react";
import {useCounterContext} from "../../hooks/useCounterContext";

export const CounterButton = () => {
  const {increment, numberOfClicks} = useCounterContext();
  const [incrementBy, setIncrementBy] = useState(1);

  return (
    <>
      <p>You have clicked the button {numberOfClicks} times</p>
      <label>
        Increment By:
        <input
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
          type="number"
        />
      </label>
      <button onClick={() => increment(incrementBy)}>Click</button>
    </>
  );
};
