// import { useState } from "react";
import styles from "./Button.module.css";
import classNames from "classnames/bind";

// type TButtonProps = {
//   type: "submit" | "reset" | "button";
//   disabled: boolean;
//   name?: string;
//   children: React.ReactNode;
// };

type TButtonProps = {
  children: React.ReactNode;
} & React.ComponentProps<"button">;

const Button = (props: TButtonProps) => {
  // const { type, disabled, name, children } = props;
  const { children, ...restButtonProps } = props;
  const cx = classNames.bind(styles);
  return (
    <>
      <form action="">
        <button
          // name={props.name}
          // type={props.type}
          // className={cx("button")}
          // disabled={props.disabled}
          // name={name}
          // type={type}
          // disabled={disabled}
          className={cx("button")}
          {...restButtonProps}
        >
          {/* {props.children} */}
          {children}
        </button>
      </form>
    </>
  );
};

export default Button;
