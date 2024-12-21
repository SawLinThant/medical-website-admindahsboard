import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign } from "lucide-react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface AmountInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  placeHolder: string;
  value?: string | number; 
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

const AmountUpdateInput = <T extends FieldValues>({
  label,
  name,
  placeHolder,
  value,
  onChange,
  register,
  ...props
}: AmountInputProps<T>) => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <Label htmlFor={name} className="text-inputlabel">
        {label}
      </Label>
      <div className="w-full relative">
        <Input
          id={name}
          name={name}
          type="number"
          placeholder={placeHolder}
          value={value} 
          onChange={onChange} 
          {...props} 
          className={`py-2 pl-12 pr-2 rounded-lg border border-gray-300 ${props.className ?? ""}`}
        />
        <div className="absolute top-2 left-3.5">
          <div className="w-[25px] h-[25px] rounded-lg text-center bg-[#c5bfc7] flex items-center justify-center">
            <DollarSign size={15} color="#211d22" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmountUpdateInput;
