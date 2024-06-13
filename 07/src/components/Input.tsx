import React from "react";
import styles from "./Input.module.css";

type InputProps = {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;
function Input(props: InputProps) {
  const { placeholder } = props;
  return (
    <div>
      <input className={styles.input} placeholder={placeholder} />
    </div>
  );
}

export default Input;
