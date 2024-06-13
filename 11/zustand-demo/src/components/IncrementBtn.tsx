import { useCountStore } from "../stores/countStore";

const IncrementBtn = () => {
  const increment = useCountStore((state) => state.increment);
  return (
    <>
      <button onClick={increment}>증가 (increment)</button>
    </>
  );
};

export default IncrementBtn;
