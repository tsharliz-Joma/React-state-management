import {useRecoilValue} from "recoil";
import {counterState} from "../../atoms/counterState";

export const DisplayCount = () => {
  const clicksData = useRecoilValue(counterState);

  return <h2>Number of clicks {clicksData.length}</h2>;
};
