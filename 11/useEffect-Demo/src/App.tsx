import { useEffect, useState } from "react";
import Navbar from "./Navbar";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
const App = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [todos, setTodos] = useState<Todo[]>([]);
  const fetchDataAsync = async () => {
    try {
      const data = await (await fetch("http://localhost:4000/todo")).json();
      setTodos(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("useEffect called"); // 첫번째 렌더링, 두번째 fetch가 완료되었을 때 => 2번나옴 -> 내부적으로 한번 호출
    fetchDataAsync();
  }, []);
  return (
    <>
      <h1>App Component</h1>
      {showNavbar && <Navbar />}
      <button
        onClick={() => {
          setShowNavbar(!showNavbar);
        }}
      ></button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text}</span>
          <span>{todo.completed ? "completed" : "Not completed"}</span>
        </div>
      ))}
    </>
  );
};

export default App;
