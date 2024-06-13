type TButtonProps = {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: string;
} & React.ComponentProps<"button">;

function Button(props: TButtonProps) {
  const {
    children,
    style = "bg-[#4f4f4f] text-white",
    onClick,
    ...restButtonProps
  } = props;

  return (
    <button
      {...restButtonProps}
      className={`w-[325px] h-11 rounded-lg text-sm disabled:bg-gray-500 disabled:cursor-not-allowed ${style}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
