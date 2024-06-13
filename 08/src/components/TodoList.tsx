// import React from "react";
// import Checkbox from "./html/Checkbox";
import TodoListItem from "./TodoListItem";
import { TTodo } from "./Todo";

type TTodoListProps = {
  todos: TTodo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const TodoList = (props: TTodoListProps) => {
  const { todos, toggleTodo, deleteTodo } = props;

  // const memoToggleTodo = useMemo(() => toggleTodo, []);
  // const memoDeleteTodo = useMemo(() => deleteTodo, []);
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            // toggleTodo={memoToggleTodo}
            // deleteTodo={memoDeleteTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
