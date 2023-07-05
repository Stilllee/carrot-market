import { error } from "console";
import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  email: string;
  password: string;
  errors?: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
    setValue,
    resetField,
    reset,
  } = useForm<LoginForm>({
    mode: "onChange",
  });
  const onValid = (data: LoginForm) => {
    console.log("통과!");
    setError("username", { message: "Taken username" });
    resetField("password");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        className="bg-black"
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: "The username should be longer than 5 chars.",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      {errors.username?.message}
      <input
        className="bg-black"
        {...register("email", {
          required: "Email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
      />
      {errors.email?.message}
      <input
        className="bg-black"
        {...register("password", {
          required: "Password is required",
        })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
