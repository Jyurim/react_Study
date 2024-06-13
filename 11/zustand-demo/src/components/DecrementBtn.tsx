import { useCountStore } from "../stores/countStore";

const DecrementBtn = () => {
  const decrement = useCountStore((state) => state.decrement);
  return (
    <>
      <button onClick={decrement}>감소 (decrement)</button>
    </>
  );
};

export default DecrementBtn;
