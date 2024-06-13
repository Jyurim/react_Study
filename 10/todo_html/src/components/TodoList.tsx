import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoListItem from "./TodoListItem";

// type TTodoListProps = {
//   todos: Todo[];
//   dispatch: React.Dispatch<Action>;
// };
const TodoList = () => {
  // const { todos, dispatch } = props;
  const { todos, dispatch } = useContext(TodoContext);
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4">
        {todos &&
          todos.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} dispatch={dispatch} />
          ))}
      </ul>
    </>
  );
};
export default TodoList;
