interface TextAreaProps {
  label?: string;
  name?: string;
  [key: string]: any;
}

export default function TextArea({ label, name, ...rest }: TextAreaProps) {
  return (
    <div>
      {label ? (
        <label htmlFor={name} className="block mb-1 text-sm font-medium ">
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        className="w-full mt-1 bg-black rounded-md shadow-sm focus:ring-main-blue ring-main-blue focus:border-main-blue"
        rows={4}
        {...rest}
      />
    </div>
  );
}
