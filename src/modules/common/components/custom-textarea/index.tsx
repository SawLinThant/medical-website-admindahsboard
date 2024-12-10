import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface InputProps {
  label: string;
  name: string;
  // register: any
  placeHolder: string;
}

const CustomTextArea: React.FC<InputProps> = ({
  label,
  name,
  placeHolder,
}: InputProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="w-full flex flex-row justify-between">
        <Label className="text-inputlabel">{label}</Label>
      </div>
      <Textarea className="min-h-36" name={name} placeholder={placeHolder} />
    </div>
  );
};
export default CustomTextArea;
