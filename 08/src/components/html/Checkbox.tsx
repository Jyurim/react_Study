import { useId } from "react";

type TCheckboxProps = {
  children?: React.ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.ComponentProps<"input">;

function Checkbox(props: TCheckboxProps) {
  const { children, checked, onChange, ...restProps } = props;
  const uuid = useId();
  return (
    <div
      className="flex items-center"
      //   className="flex items-center gap-2 [&>input:checked+label:before]:content-['✓'] [&>input:checked+label:before]:text-white [&>input:checked+label:before]:items-center [&>input:checked+label:before]:flex [&>input:checked+label:before]:text-sm [&>input:checked+label:before]:justify-center"
    >
      <input
        className="accent-[#4f4f4f] mr-2 w-5 h-5 inline-block rounded-[5px] border border-[#4f4f4f]"
        type="checkbox"
        id={uuid}
        checked={checked}
        onChange={onChange}
        {...restProps}
        // className="hidden"
      />
      <label
        htmlFor={uuid}
        // className="w-5 h-5 inline-block rounded-[5px] bg-[#4f4f4f] border border-[#4f4f4f]"
      >
        {children}
      </label>
    </div>
  );
}

export default Checkbox;
