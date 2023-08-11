import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../store/slices/counter";

export const Test = () => {
  const counter = useSelector((state: RootState) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter = {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>+2</button>
    </>
  );
};
