type TCheckboxProps = {
  children?: React.ReactNode;
} & React.ComponentProps<"input">;

function Checkbox(props: TCheckboxProps) {
  const { children, ...restProps } = props;
  return (
    <div className="flex items-center gap-2 [&>input:checked+label:before]:content-['✓'] [&>input:checked+label:before]:text-white [&>input:checked+label:before]:items-center [&>input:checked+label:before]:flex [&>input:checked+label:before]:text-sm [&>input:checked+label:before]:justify-center">
      <input type="checkbox" {...restProps} className="hidden" />
      <label
        htmlFor={restProps.id}
        className="w-5 h-5 inline-block rounded-[5px] bg-[#4f4f4f] border border-[#4f4f4f]"
      ></label>
      {children}
    </div>
  );
}

export default Checkbox;
