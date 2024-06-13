// import { useState } from "react";
import styles from "./Button.module.css";
import classNames from "classnames/bind";

const Button = () => {
  const login = true;
  const cx = classNames.bind(styles);

  // const [login, setLogin] = useState(true);
  // function handleClick() {
  //   setLogin(!login);
  // }
  return (
    <>
      <button className={cx("button", { active: login })}>Click</button>
      {/* <button
        onClick={handleClick}
        className={classNames(
          `
            bg-[#4caf50] 
            text-white 
            py-[15px] px-[32px] 
            text-center 
            no-underline inline-block 
            text-[16px] 
            my-[4px] mx-[2px] 
            cursor-pointer
            inter
            `,
          { "bg-rose-500 font-bold": login }
        )}
      >
        Login
      </button> */}
    </>
  );
};

export default Button;
