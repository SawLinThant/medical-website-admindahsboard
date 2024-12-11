"use client"

import * as React from "react"
import { Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import clsx from "clsx"

type optionType = {
    value: string
    label: string
}

interface ComboboxDemoProps {
   options: optionType[]
}

const Combobox =({options}:ComboboxDemoProps) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("");
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full" asChild>
        <Button
        ref={buttonRef}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between text-inputlabel"
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : "Select option..."}
          <ChevronDown color="#796f6f" size={20} />
        </Button>
      </PopoverTrigger>
      <PopoverContent
      style={{
        width: buttonRef.current ? `${buttonRef.current.offsetWidth}px` : "auto",
      }}
      className="p-0">
        <Command>
          <CommandInput placeholder="Search option..." />
          <CommandList>
            <CommandEmpty>No option found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={clsx(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
export default Combobox;
