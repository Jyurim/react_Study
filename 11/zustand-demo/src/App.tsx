import DecrementBtn from "./components/DecrementBtn";
import IncrementBtn from "./components/IncrementBtn";
import { useCountStore } from "./stores/countStore";

const App = () => {
  const count = useCountStore((state) => state.count);
  return (
    <>
      <h1>App Commponent: {count}</h1>
      <IncrementBtn />
      <DecrementBtn />
    </>
  );
};

export default App;
