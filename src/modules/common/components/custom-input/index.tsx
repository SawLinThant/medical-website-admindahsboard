import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputProps {
    label:string
    name: string
    register?: any
    type: string
    placeHolder: string
}

const CustomInput : React.FC<InputProps> = ({label,name,type,placeHolder,register}:InputProps) => {

    return (
      <div className="w-full h-full flex flex-col gap-2">
        <Label className="text-inputlabel">{label}</Label>
        <Input
        name={name}
        type={type}
        placeholder={placeHolder}
        {...register(name,{
          required: `${name} is required`
        })}
        />
      </div>
    );
  };
  export default CustomInput;