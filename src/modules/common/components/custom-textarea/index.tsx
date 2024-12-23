import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FilePlus2 } from "lucide-react";
import { useState } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register?: UseFormRegister<T>;
  placeHolder: string;
  [key: string]: any;
}

const CustomTextArea = <T extends FieldValues>({
  label,
  name,
  placeHolder,
  register,
  ...props
}: InputProps<T>) => {
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const text = reader.result as string;
        setTextAreaValue(text); 
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="w-full flex flex-row justify-between">
        <Label htmlFor={name} className="text-inputlabel">
          {label}
        </Label>
        <label className="no-underline text-inputlabel text-sm cursor-pointer">
          <div className="text-inputlabel text-sm flex items-center gap-1">
            <FilePlus2 size={20} color="#796f6f" /> Upload text file
          </div>
          <input
            type="file"
            accept=".txt"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>
      </div>

      <Textarea
        {...(register
          ? register(name, { required: `${String(name)} is required` })
          : {})}
        id={name}
        className="min-h-36"
        name={name}
        placeholder={placeHolder}
        value={textAreaValue}
        onChange={(e) => setTextAreaValue(e.target.value)}
        {...props}
      />
    </div>
  );
};

export default CustomTextArea;
