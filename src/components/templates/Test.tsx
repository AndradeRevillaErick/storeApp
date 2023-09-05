import { RootState } from "../../store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../store/slices/counter";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Button } from "../atoms";

export const Test = () => {
  const counter = useAppSelector((state: RootState) => state.counter.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>Counter = {counter}</h1>
      <Button children={"+"} onClick={() => dispatch(increment())} />
      <Button children={"-"} onClick={() => dispatch(decrement())} />
      <Button children={"+2"} onClick={() => dispatch(incrementByAmount(2))} />
    </>
  );
};
