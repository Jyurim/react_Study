import React from "react";
import { Action, Todo } from "../reducer/todoReducer";
import Checkbox from "./html/Checkbox";

type TodoListItemProps = {
  todo: Todo;
  dispatch: React.Dispatch<Action>;
};
const TodoListItem = (props: TodoListItemProps) => {
  console.log("TodoListItem rendering");
  const { todo, dispatch } = props;
  return (
    <>
      <li className="flex justify-between items-center py-[10px] px-[15px] bg-[rgba(53,56,62,0.05)] border border-[#4f4f4f] rounded-[4px]">
        <Checkbox
          checked={todo.completed}
          onChange={() => {
            dispatch({ type: "TOGGLE_TODO", payload: todo.id });
          }}
        >
          <span
            className={`${todo.completed && "line-through"} text-[#35383E]`}
          >
            {todo.text}
          </span>
        </Checkbox>
        <button
          className="w-6 h-6 bg-[rgba(53,56,62,0.1)] border border-[#4F4F4F] rounded flex items-center justify-center"
          onClick={() => {
            dispatch({ type: "DELETE_TODO", payload: todo.id });
          }}
        >
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.50002 9.81827L12.9548 15.2731L14.7731 13.4548L9.31829 8L14.7731 2.54518L12.9548 0.726901L7.50002 6.18173L2.04519 0.726902L0.226918 2.54518L5.68174 8L0.226919 13.4548L2.04519 15.2731L7.50002 9.81827ZM7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
              fill="#4F4F4F"
            />
            <path
              d="M7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
              fill="#4F4F4F"
            />
          </svg>
        </button>
      </li>
    </>
  );
};
export default React.memo(TodoListItem);
