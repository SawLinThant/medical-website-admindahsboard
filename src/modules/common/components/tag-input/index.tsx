"use client";

import * as React from "react";
import { Check, ChevronDown, ChevronsUpDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import clsx from "clsx";
import { Input } from "@/components/ui/input";

type OptionType = {
  value: string;
  label: string;
};

interface InputTagProps {
  options: OptionType[];
}

const InputTag = ({ options }: InputTagProps) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [selectedTags, setSelectedTags] = React.useState<OptionType[]>([]);
  const [searchValue, setSearchValue] = React.useState("");
  const InputRef = React.useRef<HTMLDivElement | null>(null);

  const handleAddTag = (option: OptionType) => {
    if (!selectedTags.some((tag) => tag.value === option.value)) {
      setSelectedTags((prev) => [...prev, option]);
    }
    setSearchValue("");
    setOpen(false);
  };

  const handleRemoveTag = (value: string) => {
    setSelectedTags((prev) => prev.filter((tag) => tag.value !== value));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full" asChild>
        <div
          ref = {InputRef}
          className="flex items-center flex-wrap gap-2 border rounded px-2 py-1 focus-within:ring-2 focus-within:ring-blue-500"
          onClick={() => setOpen(true)}
        >
          {selectedTags.map((tag) => (
            <div
              key={tag.value}
              className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded text-sm"
            >
              <span>{tag.label}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveTag(tag.value);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
          <div className="relative flex-1">
            <input
              placeholder={`${selectedTags.length < 1? "Select Product Tag (s)":""}`}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full pr-4 border-none outline-none bg-transparent p-1"
            />
            <ChevronDown className="absolute right-0 top-1"/>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent
        style={{
          width: InputRef.current
            ? `${InputRef.current.offsetWidth}px`
            : "auto",
        }}
        className="p-0"
      >
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
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    handleAddTag(option);
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
  );
};
export default InputTag;
