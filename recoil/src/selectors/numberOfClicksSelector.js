import {selector} from "recoil";
import {counterState} from "../atoms/counterState";

export const numberOfClicksSelector = selector({
  key: "numberOfClicksSelector",
  // This functions allows us to calculate a value based on existing values in our atoms
  get: ({get}) => {
    const clicksData = get(counterState);
    const totalClicks = clicksData.reduce((sum, click) => {
      return sum + click.amount;
    }, 0);
    return totalClicks;
  },
});
