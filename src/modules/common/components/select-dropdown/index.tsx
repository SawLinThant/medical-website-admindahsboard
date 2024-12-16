import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectItemType {
  id: string
  name: string
}

interface SelectDropdownProps {
    options: SelectItemType[],
    label: string
}

export function SelectDropdown({options,label}:SelectDropdownProps) {
  return (
    <Select>
      <SelectTrigger className="w-[150px] border border-gray-400">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
            {options.map((option) => (
                <SelectLabel key={option.id}>{option.name}</SelectLabel>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
