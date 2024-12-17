import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectItemType {
  id: string;
  name: string;
}

interface SelectDropdownProps {
  options: SelectItemType[];
  label: string;
  setOption: (option: string) => void;
}

export function SelectDropdown({
  options,
  label,
  setOption,
}: SelectDropdownProps) {
  return (
    <Select
    onValueChange={(value) => {
      setOption(value); 
    }}
  >
    <SelectTrigger className="w-[150px] border-gray-600">
      <SelectValue placeholder={label} />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>{label}</SelectLabel>
        <SelectItem
            key={1}
            value={"all"}
          >
            All
          </SelectItem>
        {options.map((option, index) => (
          <SelectItem
            key={index}
            value={option.id}
          >
            {option.name}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
  );
}
