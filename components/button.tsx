import { cls } from "../libs/utils";

interface ButtonProps {
  large?: boolean;
  text: string;
  [key: string]: any;
}

export default function Button({
  large = false,
  onClick,
  text,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={cls(
        "w-full border-transparent font-medium focus:ring-2 focus:ring-offset-2 focus:ring-main-blue focus:ring-offset-black focus:outline-none flex items-center justify-center px-4 py-2 text-sm transition-colors bg-main-blue border border-gray-400 rounded-md shadow-sm hover:bg-hover-blue",
        large ? "py-3 text-base" : "py-2 text-sm "
      )}
    >
      {text}
    </button>
  );
}
