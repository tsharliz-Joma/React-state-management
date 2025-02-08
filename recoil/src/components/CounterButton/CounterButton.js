import {useRecoilState, useRecoilValue} from "recoil";
import {counterState} from "../../atoms/counterState";
import {incrementByState} from "../../atoms/incrementByState";
import {numberOfClicksSelector} from "../../selectors/numberOfClicksSelector";

export const CounterButton = () => {
  const numberOfClicks = useRecoilValue(numberOfClicksSelector);
  const [clicksData, setClicksData] = useRecoilState(counterState);
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
      {/* This increments clicksData which is a globally accessible state with useRecoil */}
      <button
        onClick={() =>
          setClicksData([
            ...clicksData,
            {timestamp: Date.now, amount: incrementBy},
          ])
        }>
        Click
      </button>
    </>
  );
};
