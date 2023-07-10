import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  kind?: "text" | "phone" | "price";
  type: string;
  register: UseFormRegisterReturn;
  required: boolean;
}

export default function Input({
  label,
  name,
  kind = "text",
  type,
  required,
  register,
}: InputProps) {
  return (
    <div>
      <label
        className="block mb-1 text-sm font-medium dark:text-gray-300"
        htmlFor={name}
      >
        {label}
      </label>
      {kind === "text" ? (
        <div className="relative flex items-center rounded-md shadow-sm">
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm appearance-none dark:border-gray-100 dark:bg-black dark:text-white focus:outline-none focus:ring-main-blue focus:border-main-blue"
          />
        </div>
      ) : null}
      {kind === "price" ? (
        <div className="relative flex items-center rounded-md shadow-sm">
          <div className="absolute left-0 flex items-center justify-center pl-3 pointer-events-none">
            <span className="text-sm dark:text-gray-300">\</span>
          </div>
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm appearance-none dark:border-gray-100 dark:bg-black pl-7 focus:outline-none focus:ring-main-blue focus:border-main-blue dark:text-white"
          />
          <div className="absolute right-0 flex items-center pr-3 pointer-events-none">
            <span className="dark:text-gray-300">KRW</span>
          </div>
        </div>
      ) : null}
      {kind === "phone" ? (
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center px-3 text-sm bg-gray-100 border border-r-0 border-gray-500 shadow-sm select-none dark:border-gray-300 dark:text-gray-400 dark:bg-gray-950 rounded-l-md ">
            +82
          </span>
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md rounded-l-none shadow-sm appearance-none dark:text-white dark:border-gray-100 dark:bg-black focus:outline-none focus:border-main-blue focus:ring-main-blue focue:border-main-blue"
          />
        </div>
      ) : null}
    </div>
  );
}
