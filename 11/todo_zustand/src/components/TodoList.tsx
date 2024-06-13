import TodoListItem from "./TodoListItem";
import { useTodoStore } from "../stores/todoStore";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4">
        {todos &&
          todos.map((todo) => <TodoListItem key={todo.id} todo={todo} />)}
      </ul>
    </>
  );
};
export default TodoList;
