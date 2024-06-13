import { TTodo } from "./Todo";
import TodoListItem from "./TodoListItem";

type TTodoList = {
  todos: TTodo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const TodoList = (props: TTodoList) => {
  const { todos, toggleTodo, deleteTodo } = props;
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4">
        {todos &&
          todos.map((todo) => {
            return (
              <TodoListItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            );
          })}
      </ul>
    </>
  );
};
export default TodoList;
