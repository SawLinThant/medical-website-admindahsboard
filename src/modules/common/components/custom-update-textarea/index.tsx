import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FieldValues, Path } from "react-hook-form";

interface TextAreaProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  value: string | number;
  placeHolder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFileUpload?: (text: string) => void; // Callback for file upload
  [key: string]: any; // Additional props
}

const CustomUpdateTextArea = <T extends FieldValues>({
  label,
  name,
  value,
  placeHolder,
  onChange,
  onFileUpload,
  ...props
}: TextAreaProps<T>) => {

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="w-full flex flex-row justify-between">
        <Label htmlFor={name} className="text-inputlabel">
          {label}
        </Label>
        {/* <label className="no-underline text-inputlabel text-sm cursor-pointer">
          <div className="text-inputlabel text-sm flex items-center gap-1">
            <FilePlus2 size={20} color="#796f6f" /> Upload text file
          </div>
          <input
            type="file"
            accept=".txt"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label> */}
      </div>

      <Textarea
        id={name}
        className="min-h-36"
        name={name}
        placeholder={placeHolder}
        value={value} // Controlled by parent
        onChange={onChange} // Controlled by parent
        {...props}
      />
    </div>
  );
};

export default CustomUpdateTextArea;
