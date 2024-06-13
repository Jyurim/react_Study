import { useState } from "react";
import Button from "./html/Button";
import Input from "./html/Input";

type TodoEditorProps = {
  addTodo: (text: string) => void;
};

const TodoEditor = (props: TodoEditorProps) => {
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

  // useEffect(() => {
  //   console.log("useEffect called");
  //   axiosPost(text);
  // }, []);

  return (
    <>
      <form action="" className="flex gap-2" onSubmit={onSubmitHandler}>
        <Input
          type="text"
          placeholder="Enter Your Todo"
          value={text}
          onChange={onChangeHandler}
        />
        <Button type="submit" style={"w-[77px] bg-[#4F4F4F] text-white"}>
          Add
        </Button>
      </form>
    </>
  );
};
export default TodoEditor;
