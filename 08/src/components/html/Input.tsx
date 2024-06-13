import React from "react";

type TInputProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

// type TInputProps = {} & React.ComponentProps<"input">;

function Input(props: TInputProps) {
  const { onChange, ...restProps } = props;
  return (
    <div>
      <input
        {...restProps}
        onChange={onChange}
        className="w-[325px] h-11 border border-[#4f4f4f] rounded-lg py-[13.5] px-4 text-sm placeholder:text-[#acacac]"
      />
    </div>
  );
}

export default Input;
