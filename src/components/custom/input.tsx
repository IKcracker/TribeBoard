import { EyeOff } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type InputProps = {
  label: string;
  name: string;
  placeholder: string;
  isPassword?: boolean;
};

function InputComponent({
  label,
  name,
  placeholder,
  isPassword = false,
}: InputProps) {
  return (
    <div className="grid gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor={name}>{label}</Label>
        {isPassword && <a>Forgot your password?</a>}
      </div>
      <div className="relative">
        <Input
          name={name}
          type="email"
          className="border-2 border-gray-300 outline-none focus:border-green-500 focus:ring-0"
          placeholder={placeholder}
        />
        {isPassword && (
          <EyeOff size={18} className="absolute right-2 h-full bottom-0" />
        )}
      </div>
    </div>
  );
}

export default InputComponent;
