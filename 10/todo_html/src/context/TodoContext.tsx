import { createContext, useReducer } from "react";
import { Action, Todo, todoReducer } from "../reducer/todoReducer";

export type TodoContextType = {
  todos: Todo[];
  dispatch: React.Dispatch<Action>;
};

const TodoContext = createContext<TodoContextType>({
  todos: [],
  dispatch: () => {},
});

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
