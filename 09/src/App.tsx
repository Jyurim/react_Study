import { useMemo, useState } from "react";
import { initalItems } from "./lib/utils";

const App = () => {
  const [count, setCount] = useState<number>(0);
  // 불필요한 연산을 만들어준 것
  // 3000만개의 배열 데이터를 렌더링마다 재생성하고 있음 -> 반응하지 못 함 -> 딜레이 생김
  const [items] = useState(initalItems);
  const selectItems = useMemo(() => items.find((item) => item.selected), []);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
      {selectItems?.id}
    </>
  );
};

export default App;
