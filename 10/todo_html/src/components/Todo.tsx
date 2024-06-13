import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import { TodoProvider } from "../context/TodoContext";

const Todo = () => {
  return (
    <>
      <div className="w-[375px] bg-white py-10 px-6 text-[#4b4b4b]">
        <h1 className="text-xl font-bold mb-[10px]"> Todo Into App</h1>
        <p className="text-sm mb-5">Please enter your details to continue.</p>
        <TodoProvider>
          {/* 등록 */}
          <TodoEditor />
          {/* 리스트 */}
          <TodoList />
        </TodoProvider>
      </div>
    </>
  );
};
export default Todo;
