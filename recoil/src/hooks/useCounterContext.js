import {useContext} from "react";
import {CounterContext} from "../context/ContextProvider";

export const useCounterContext = () => useContext(CounterContext);
