import React from "react";
import Checkbox from "./html/Checkbox";
import { TTodo } from "./Todo";
import SvgClose from "../icons/SvgClose";

const TodoListItem = ({
  todo,
  toggleTodo,
  deleteTodo,
}: {
  todo: TTodo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}) => {
  return (
    <li className="flex justify-between items-center py-[10px] px-[15px]  bg-[rgba(53,56,62,0.05)] border border-[#4f4f4f] rounded-[4px]">
      <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)}>
        <span className={`${todo.completed && "line-through	"}"text-[#35383E]"`}>
          {todo.text}
        </span>
      </Checkbox>
      <button
        className="w-6 h-6 bg-[rgba(53, 56, 62, 0.1)] border border-[#4f4f4f] rounded flex items-center justify-center"
        onClick={() => deleteTodo(todo.id)}
      >
        <SvgClose />
      </button>
    </li>
  );
};

export default React.memo(TodoListItem);
