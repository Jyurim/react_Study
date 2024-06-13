import { v4 as uuidv4 } from "uuid";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type Action = {
  type: "ADD_TODO" | "TOGGLE_TODO" | "DELETE_TODO";
  // payload: Partial<Todo>;
  // payload: { id: string; text: string };
  payload: string;
};

export const todoReducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: uuidv4(), text: action.payload, completed: false },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
