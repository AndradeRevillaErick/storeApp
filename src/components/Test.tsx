import { RootState } from "../store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../store/slices/counter";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

export const Test = () => {
  const counter = useAppSelector((state: RootState) => state.counter.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>Counter = {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>+2</button>
    </>
  );
};
