import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldValues, Path } from "react-hook-form";

interface InputProps<T extends FieldValues> {
    label: string;
    name: Path<T>;
    type: string;
    placeHolder: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    [key: string]: any; // Additional props
  }
  
  const CustomUpdateInput = <T extends FieldValues>({
    label,
    name,
    type,
    placeHolder,
    value,
    onChange,
    ...props
  }: InputProps<T>) => {
    return (
      <div className="w-full h-full flex flex-col gap-2">
        <Label htmlFor={String(name)} className="text-inputlabel">
          {label}
        </Label>
        <Input
          id={String(name)}
          name={String(name)} 
          type={type}
          placeholder={placeHolder}
          value={value}
          onChange={onChange} 
          {...props}
        />
      </div>
    );
  };
  
  export default CustomUpdateInput;
