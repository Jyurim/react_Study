import { useState } from "react";
import Button from "./Button2";
import Input from "./Input";
import styles from "./Signup.module.css";

function Signup() {
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
    const loginValid = email.trim() === "" || password.trim() === "";
    const signupValid = name.trim() === "" || loginValid;
    return action === "LogIn" ? loginValid : signupValid;
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid()) {
      alert(`${action} Successfully!`);
    }
  };

  return (
    <div className={styles.container}>
      <div style={{ color: "#4F4F4F" }}>
        <h1 className={styles.title}>{action} Into App</h1>
        <h2>Please enter your details to continue.</h2>
      </div>
      <form onSubmit={onSubmitHandler}>
        {action === "Sign Up" && (
          <Input
            placeholder="Enter Your Name"
            value={name}
            onChange={onChangeName}
          />
        )}
        <Input
          placeholder="someone@example.com"
          value={email}
          onChange={onChangeEmail}
        />
        <Input
          placeholder="Enter Password"
          value={password}
          onChange={onChangePassword}
        />
        <div style={{ paddingBottom: "24px" }}>
          <input
            type="checkbox"
            name="agree"
            checked={agree}
            onChange={onChangeAgree}
          />
          <label htmlFor="agree">
            {" "}
            I agree to the <strong>terms</strong> and <strong>policies.</strong>
          </label>
        </div>
        <Button disabled={isValid()}>{action}</Button>
        <Button
          type="submit"
          style={{
            background: "white",
            color: "#4F4F4F",
            border: "1px solid #4F4F4F",
          }}
          onClick={onClickHandler}
        >
          Go To {action === "LogIn" ? "Sign Up" : "LogIn"}
        </Button>
      </form>
    </div>
  );
}

export default Signup;
