import { useContext } from "react";
import { CountContext } from "../context/CountContext";

const Banner = () => {
  // const context = useContext(CountContext);
  // console.log(context);
  const { count, setCount } = useContext(CountContext);

  return (
    <>
      <div>Banner: {count}</div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        증가
      </button>
    </>
  );
};

export default Banner;
