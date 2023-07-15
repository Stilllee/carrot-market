import { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaProps {
  label?: string;
  name?: string;
  register: UseFormRegisterReturn;
  [key: string]: any;
}

export default function TextArea({
  label,
  name,
  register,
  ...rest
}: TextAreaProps) {
  return (
    <div>
      {label ? (
        <label htmlFor={name} className="block mb-1 text-sm font-medium ">
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        {...register}
        className="w-full mt-1 text-gray-400 rounded-md shadow-sm dark:bg-black dark:text-white focus:ring-main-blue ring-main-blue focus:border-main-blue"
        rows={4}
        {...rest}
      />
    </div>
  );
}
