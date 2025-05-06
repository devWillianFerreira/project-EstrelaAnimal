import { InputMask } from "@react-input/mask";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface MaskedInputProps {
  mask: string;
  replacement?: Record<string, RegExp>;
  name: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
}

const MaskedInput = ({
  mask,
  name,
  placeholder,
  register,
  type,
  error,
  replacement,
  rules,
}: MaskedInputProps) => {
  return (
    <div>
      <InputMask
        mask={mask}
        className="w-full h-11 rounded-xl px-2 border-1  border-gray-200 mb-3"
        {...register(name, rules)}
        type={type}
        placeholder={placeholder}
        replacement={replacement}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default MaskedInput;
