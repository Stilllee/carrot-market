interface InputProps {
  label: string;
  name: string;
  kind?: "text" | "phone" | "price";
  [key: string]: any;
}

export default function Input({
  label,
  name,
  kind = "text",
  ...rest
}: InputProps) {
  return (
    <div>
      <label
        className="block mb-1 text-sm font-medium text-gray-300"
        htmlFor={name}
      >
        {label}
      </label>
      {kind === "text" ? (
        <div className="relative flex items-center rounded-md shadow-sm">
          <input
            id={name}
            {...rest}
            className="w-full px-3 py-2 placeholder-gray-400 bg-black border border-gray-100 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-main-blue focus:border-main-blue"
          />
        </div>
      ) : null}
      {kind === "price" ? (
        <div className="relative flex items-center rounded-md shadow-sm">
          <div className="absolute left-0 flex items-center justify-center pl-3 pointer-events-none">
            <span className="text-sm text-gray-300">\</span>
          </div>
          <input
            id={name}
            {...rest}
            className="w-full px-3 py-2 placeholder-gray-400 bg-black border border-gray-100 rounded-md shadow-sm appearance-none pl-7 focus:outline-none focus:ring-main-blue focus:border-main-blue"
          />
          <div className="absolute right-0 flex items-center pr-3 pointer-events-none">
            <span className="text-gray-300">KRW</span>
          </div>
        </div>
      ) : null}
      {kind === "phone" ? (
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center px-3 text-sm text-gray-400 border border-r-0 border-gray-300 shadow-sm select-none bg-gray-950 rounded-l-md">
            +82
          </span>
          <input
            id={name}
            {...rest}
            className="w-full px-3 py-2 placeholder-gray-400 bg-black border border-gray-100 rounded-md rounded-l-none shadow-sm appearance-none focus:outline-none focus:border-main-blue focus:ring-main-blue focue:border-main-blue"
          />
        </div>
      ) : null}
    </div>
  );
}
