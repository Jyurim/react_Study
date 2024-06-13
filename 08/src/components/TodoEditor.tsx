import React, { useState } from "react";
import Input from "./html/Input";
import Button from "./html/Button";

type TTodoEditorProps = {
  addTodo: (text: string) => void;
};

const TodoEditor = (props: TTodoEditorProps) => {
  const { addTodo } = props;
  const [text, setText] = useState("");
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <>
      <form action="" onSubmit={onSubmitHandler} className="flex gap-2">
        <Input
          type="text"
          value={text}
          onChange={onChangeHandler}
          placeholder="Enter Your Todo"
        />
        <Button type="submit" style={"w-[77px] bg-[#4f4f4f] text-white"}>
          Add
        </Button>
      </form>
    </>
  );
};

export default TodoEditor;
