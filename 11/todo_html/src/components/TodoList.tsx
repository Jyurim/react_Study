import { Todo } from "./Todo";
import TodoListItem from "./TodoListItem";

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const TodoList = (props: TodoListProps) => {
  const { todos, toggleTodo, deleteTodo } = props;
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
