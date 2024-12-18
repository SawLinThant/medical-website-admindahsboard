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
import { PriceRangeType } from "@/lib/types";
import { json } from "stream/consumers";


interface SelectDropdownProps {
  options: PriceRangeType[];
  label: string;
  setOption: (option: PriceRangeType | string) => void;
}

export function PriceSelectDropdown({
  options,
  label,
  setOption,
}: SelectDropdownProps) {
  return (
    <Select
    onValueChange={(value: string) => {
        if (value === "all") {
          setOption("all");
        } else {
          const selectedOption: PriceRangeType = JSON.parse(value);
          setOption(selectedOption);
        }
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
            value={JSON.stringify(option)}
          >
            {option.start_price} ~ {option.end_price}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
  );
}
