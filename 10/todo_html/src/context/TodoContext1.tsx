import { createContext, useCallback, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type TodoContextType = {
  todo: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export type TodoContextDispatchType = {
  todo: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const defaultValues = {
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  deleteTodo: () => {},
};
const defaultDispatchValues = {
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  deleteTodo: () => {},
};
const TodoContext = createContext<TodoContextType>(defaultValues);
const TodoDispatchContext = createContext<TodoContextDispatchType>(
  defaultDispatchValues
);

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = useCallback((text: string) => {
    setTodos((prev) => [...prev, { id: uuidv4(), text, completed: false }]);
  }, []);
  const toggleTodo = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const memoValue = useMemo(() => ({ todo }), [todos]);
  const memoDispatchValue = useMemo(
    () => ({ addTodo, toggleTodo, deleteTodo }),
    []
  );

  return (
    <TodoContext.Provider value={memoValue}>
      <TodoDispatchContext.Provider value={memoDispatchValue}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
