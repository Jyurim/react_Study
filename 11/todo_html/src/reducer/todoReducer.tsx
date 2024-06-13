import axios from "axios";
// import { v4 as uuidv4 } from "uuid";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type Action = {
  type: "GET_TODO" | "ADD_TODO" | "TOGGLE_TODO" | "DELETE_TODO";
  payload: string;
};

const todosGet = async () => {
  const res = await axios.get("http://localhost:4000/todo");
  return res.data;
};

const todoPost = async (text: string) => {
  await axios.post(
    "http://localhost:4000/todo",
    {
      text: text,
    },
    { headers: { "Content-Type": "application/json" } }
  );
};

const todoToggle = async (id: string) => {
  await axios.patch(`http://localhost:4000/todo/${id}`);
};

const todoDelete = async (id: string) => {
  await axios.delete(`http://localhost:4000/todo/${id}`);
};

export const todoReducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case "GET_TODO":
      return todosGet();
    case "ADD_TODO":
      return todoPost(action.payload);
    case "TOGGLE_TODO":
      return todoToggle(action.payload);
    case "DELETE_TODO":
      return todoDelete(action.payload);
    default:
      return state;
  }
};

// export const todoReducer = (state: Todo[], action: Action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return [
//         ...state,
//         { id: uuidv4(), text: action.payload, completed: false },
//       ];
//     case "TOGGLE_TODO":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     case "DELETE_TODO":
//       return state.filter((todo) => todo.id !== action.payload);
//     default:
//       return state;
//   }
// };
