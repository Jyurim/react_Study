import { useCallback, useState } from "react";
import Display from "../components/Display";
// import Input from "./components/Input";
import Button from "../components/Button";

function App1() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  // const onClickHandler = () => {
  // setCount(count + 1);
  // 이전 값을 참조하는 경우 사용하면 좋음. 그게 아니면 새로운 값을 바로 전달
  // setCount((prevCount) => {
  //   console.log(prevCount);
  //   return prevCount + 1;
  // });

  // const onClickHandler = useCallback(() => {
  //   setCount(count + 1);
  // }, [count]);

  const onClickHandler = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <Display count={count} />
      {/* <Input /> */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <br />
      <br />
      <Button onClickhandler={onClickHandler} />
    </>
  );
}

export default App1;
