import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

export type RadioType = {
  id: string;
  value: string;
  label: string;
};

export interface RadioProps {
  options: RadioType[];
  setOption?: (value: string) => void;
}

const CustomRadioGroup: React.FC<RadioProps> = ({ options, setOption }) => {
  return (
    <RadioGroup
      defaultValue={options.length > 0 ? options[0].value : undefined}
      className="flex flex-row items-center"
      onValueChange={(value) => setOption?.(value)}
    >
      {options.map((option) => (
        <div key={option.id} className="flex items-center space-x-2">
          <RadioGroupItem value={option.value} id={option.id} />
          <Label htmlFor={option.id}>{option.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default CustomRadioGroup;
