import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign } from "lucide-react";

interface AmountInputProps {
  label: string;
  name: string;
  placeHolder: string;
  register?: any;
}

const AmountInput: React.FC<AmountInputProps> = ({
  label,
  name,
  placeHolder,
  register
}) => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <Label className="text-inputlabel">{label}</Label>
      <div className="w-full relative">
        <Input
          name={name}
          type="number"
          placeholder={placeHolder}
          {...register(name,{
            required: `${name} is required`
          })}
          className="py-2 pl-12 pr-2 rounded-lg border border-gray-300"
        />
        <div className="absolute top-2 left-3.5 ">
          <div className="w-[25px] h-[25px] rounded-lg text-center bg-[#c5bfc7] flex items-center justify-center">
            <DollarSign size={15} color="#211d22"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AmountInput;
