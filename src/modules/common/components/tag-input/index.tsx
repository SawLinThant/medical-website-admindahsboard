"use client";

import * as React from "react";
import { Check, ChevronDown, X } from "lucide-react";
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
import { InputTagOptionType } from "@/lib/types";



interface InputTagProps {
  options: InputTagOptionType[];
  setTag: (option:InputTagOptionType[]) => void
  removeTag: (id:number) => void
  selectedTag?: InputTagOptionType[]
}

const InputTag = ({ options,setTag,removeTag,selectedTag }: InputTagProps) => {
  const [open, setOpen] = React.useState(false);
  const [id, setid] = React.useState("");
  const [selectedTags, setSelectedTags] = React.useState<InputTagOptionType[]>([]);
  const [searchid, setSearchid] = React.useState("");
  const InputRef = React.useRef<HTMLDivElement | null>(null);

  const handleAddTag = (option: InputTagOptionType) => {
    if(selectedTag)
    if (!selectedTag.some((tag) => tag.id === option.id)) {
      const updatedTags = [...selectedTag, option];
      setSelectedTags(updatedTags);
      setTag(updatedTags); 
    }
    setSearchid("");
    setOpen(false);
  };

  const handleRemoveTag = (id: string) => {
    setSelectedTags((prev) => prev.filter((tag) => tag.id !== id));
  };


  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full" asChild>
        <div
          ref = {InputRef}
          className="flex items-center flex-wrap gap-2 border rounded px-2 py-1 focus-within:ring-2 focus-within:ring-blue-500"
          onClick={() => setOpen(true)}
        >
          {selectedTag && selectedTag.map((tag,index) => (
            <div
              key={tag.id}
              className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded text-sm"
            >
              <span>{tag.name}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveTag(tag.id);
                  removeTag(index)
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
              id={searchid}
              onChange={(e) => setSearchid(e.target.id)}
              className="w-full text-sm text-inputname pr-6 border-none outline-none bg-transparent p-1"
            />
            <ChevronDown size={15} color="#796f6f" className="absolute right-2 top-2"/>
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
                  key={option.id}
                  id={option.id}
                  onSelect={(currentid) => {
                    setid(currentid === id ? "" : currentid);
                    setOpen(false);
                    handleAddTag(option);
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
  );
};
export default InputTag;
