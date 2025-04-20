import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface inputProps {
  name: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
}

const Input = ({
  name,
  placeholder,
  type,
  register,
  rules,
  error,
}: inputProps) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        id={name}
        className="w-full h-11 rounded-xl px-2 border-1  border-gray-200 mb-3"
        {...register(name, rules)}
      />
      {error && <p className="text-red-500 pb-3">{error}</p>}
    </div>
  );
};

export default Input;
