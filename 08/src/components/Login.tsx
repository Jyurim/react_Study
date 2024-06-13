import { useState } from "react";
import Button from "./html/Button";
import Input from "./html/Input";
import Checkbox from "./html/Checkbox";

function Login() {
  const [action, setAction] = useState<"LogIn" | "Sign Up">("LogIn");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [agree, setAgree] = useState<boolean>(false);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangeAgree = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgree(e.target.checked);
  };
  const onClickHandler = () => {
    setAction(action === "LogIn" ? "Sign Up" : "LogIn");
  };
  const isValid = () => {
    const loginValid = email.trim() === "" || password.trim() === "" || !agree;
    const signupValid = name.trim() === "" || loginValid;
    return action === "LogIn" ? loginValid : signupValid;
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid()) {
      alert(`${action} Successfully!`);
    }
  };

  return (
    <div className="w-[375px] bg-white py-10 px-6 text-[#4f4f4f]">
      <h1 className="text-xl font-bold mb-[10px]">{action} Into App</h1>
      <p className="text-sm mb-5">Please enter your details to continue.</p>
      <form action="" className="flex flex-col gap-4" onSubmit={onSubmit}>
        {action === "Sign Up" && (
          <Input
            type="text"
            value={name}
            onChange={onChangeName}
            placeholder="Enter Your Name"
            required
          />
        )}
        <Input
          type="email"
          value={email}
          onChange={onChangeEmail}
          placeholder="someone@example.com"
          required
        />
        <Input
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="Enter Password"
          required
        />
        <Checkbox checked={agree} onChange={onChangeAgree}>
          I agree with <em className="not-italic font-bold">terms</em> and{" "}
          <em className="not-italic font-bold">policies.</em>
        </Checkbox>
        <Button type="submit" disabled={isValid()}>
          {action === "LogIn" ? "LogIn" : "Sign Up"}
        </Button>
        <Button
          type="button"
          style="border border-[#4f4f4f]"
          onClick={onClickHandler}
        >
          Go To {action === "LogIn" ? "Sign Up" : "LogIn"}
        </Button>
      </form>
    </div>
  );
}

export default Login;
