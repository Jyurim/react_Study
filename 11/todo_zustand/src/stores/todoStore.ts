import { create } from "zustand";
// import axios from "axios";
import axiotInstance from "../libs/http";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type TodoStporeType = {
  todos: Todo[];
  fetchTodos: () => void;
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

export const useTodoStore = create<TodoStporeType>((set) => ({
  todos: [],
  fetchTodos: async () => {
    // const response = await axios.get("http://localhost:4000/todo");
    const response = await axiotInstance.get("/todo");
    set({ todos: response.data });
  },
  addTodo: async (text) => {
    const response = await axiotInstance.post("/todo", { text });
    if (response.status === 201) {
      set((state) => ({
        // todos: [...state.todos, { id: uuidv4(), text, completed: false }],
        todos: [...state.todos, response.data],
      }));
    }
    // console.log(response.data);
  },
  toggleTodo: async (id) => {
    const response = await axiotInstance.patch(`/todo/${id}`);
    if (response.status === 200) {
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      }));
    }
  },
  removeTodo: async (id) => {
    const response = await axiotInstance.delete(`/todo/${id}`);
    if (response.status === 204) {
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      }));
    }
  },
}));
