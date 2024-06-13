import { useEffect, useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import axios from "axios";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const Todo = () => {
  // const [todos, dispatch] = useReducer(todoReducer, []);
  const [todos, setTodos] = useState([]);
  const todosGet = async () => {
    const res = await axios.get("http://localhost:4000/todo");
    setTodos(res.data);
  };

  useEffect(() => {
    todosGet();
    console.log("useEffect called");
  }, []);

  const addTodo = async (text: string) => {
    await axios.post(
      "http://localhost:4000/todo",
      {
        text: text,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    todosGet();
  };
  // Toggle
  const toggleTodo = async (id: string) => {
    await axios.patch(`http://localhost:4000/todo/${id}`);
    todosGet();
  };

  // Delete
  const deleteTodo = async (id: string) => {
    await axios.delete(`http://localhost:4000/todo/${id}`);
    todosGet();
  };

  return (
    <>
      <div className="w-[375px] bg-white py-10 px-6 text-[#4b4b4b]">
        <h1 className="text-xl font-bold mb-[10px]"> Todo Into App</h1>
        <p className="text-sm mb-5">Please enter your details to continue.</p>
        {/* 등록 */}
        <TodoEditor addTodo={addTodo} />
        {/* 리스트 */}
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
};
export default Todo;
