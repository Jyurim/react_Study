import React from "react";
import { ReducerAction } from "../App";

type ExampleOneProps = {
  count: number;
  //   setCount: React.Dispatch<React.SetStateAction<number>>;
  dispatch: React.Dispatch<ReducerAction>;
};

const ExampleOne = (props: ExampleOneProps) => {
  const { count, dispatch } = props;
  //   const { count, setCount } = props;
  return (
    <>
      <h1>ExampleOne Component: {count}</h1>
      {/* <button onClick={() => setCount((prev) => prev + 2)}>증가(+2)</button> */}
      <button onClick={() => dispatch({ type: "ExampleOne", payload: 1 })}>
        증가(+1)
      </button>
    </>
  );
};

export default ExampleOne;
