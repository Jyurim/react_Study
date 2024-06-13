import React from "react";
import styles from "./Button.module.css";
type TButtonProps = {
  children?: React.ReactNode;
} & React.ComponentProps<"button">;

function Button(props: TButtonProps) {
  const { children, ...restButtonProps } = props;
  return (
    <button {...restButtonProps} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
