import {useRecoilState} from "recoil";
import {counterState} from "../../atoms/counterState";
import {incrementByState} from "../../atoms/incrementByState";

export const CounterButton = () => {
  const [numberOfClicks, setNumberOfClicks] = useRecoilState(counterState);
  const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

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
      <button onClick={() => setNumberOfClicks(numberOfClicks + incrementBy)}>
        Click
      </button>
    </>
  );
};
