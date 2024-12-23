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
    id: string
    name: string
}

interface ComboboxDemoProps {
   options: optionType[]
   setCategory: (id:string) => void
   label: string
}

const Combobox =({options,setCategory,label}:ComboboxDemoProps) => {
  const [open, setOpen] = React.useState(false)
  const [id, setid] = React.useState("");
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full" asChild>
        <Button
        ref={buttonRef}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between text-inputname"
        >
          {id
            ? options.find((option) => option.id === id)?.name
            :label}
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
                  key={option.id}
                  id={option.id}
                  onSelect={() => {
                    setid(option.id)
                    setOpen(false)
                    setCategory(option.id)
                  }}
                >
                  <Check
                    className={clsx(
                      "mr-2 h-4 w-4",
                      id === option.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.name}
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
