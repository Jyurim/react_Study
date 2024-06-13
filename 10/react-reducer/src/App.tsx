import { useReducer } from "react";
import ExampleOne from "./components/ExampleOne";
import ExampleTwo from "./components/ExampleTwo";

export type ReducerAction = {
  type: string;
  payload: number;
};
const reducer = (state: number, action: ReducerAction) => {
  switch (action.type) {
    case "ExampleOne":
      // return state + 1;
      return state + action.payload;
    case "ExampleTwo":
      // return state + 4;
      return state + action.payload;
    default:
      return state;
  }
  // 상태관리 로직
  return state;
};
function App() {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      {/* <ExampleOne count={count} setCount={setCount} /> */}
      <ExampleOne count={count} dispatch={dispatch} />
      <ExampleTwo count={count} dispatch={dispatch} />
    </>
  );
}

export default App;
