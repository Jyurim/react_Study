import { ReducerAction } from "../App";

type ExampleTwoProps = {
  count: number;
  dispatch: React.Dispatch<ReducerAction>;
};

const ExampleTwo = (props: ExampleTwoProps) => {
  const { count, dispatch } = props;
  return (
    <>
      <h1>ExampleTwo Component: {count}</h1>
      <button onClick={() => dispatch({ type: "ExampleTwo", payload: 4 })}>
        증가(+4)
      </button>
    </>
  );
};

export default ExampleTwo;
