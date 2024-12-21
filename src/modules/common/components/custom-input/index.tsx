import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> {
  label: string;
  name: Path<T>; 
  register?: UseFormRegister<T>; 
  type: string; 
  placeHolder: string; 
  [key:string]: any
}

const CustomInput = <T extends Record<string, T>>({
  label,
  name,
  type,
  placeHolder,
  register,
  ...props
}: InputProps<T>) => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <Label htmlFor={String(name)} className="text-inputlabel">
        {label}
      </Label>
      <Input
        id={String(name)} 
        type={type}
        placeholder={placeHolder}
        {...(register
          ? register(name, { required: `${String(name)} is required` })
          : {})}
          {...(type !== "file" ? props : {})}
      />
    </div>
  );
};

export default CustomInput;
