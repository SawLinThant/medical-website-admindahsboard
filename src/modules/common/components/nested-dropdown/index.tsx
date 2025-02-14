import { ChevronRight } from "lucide-react";
import { useState } from "react";

export interface NestedOption {
  id: string;
  label: string;
  subOptions?: SubOption[]; 
}

export interface SubOption {
  id: string;
  name: string;
  type:string;
}

interface SelectDropdownProps {
  options: NestedOption[];
  label: string;
  setOption: (option: SubOption | null) => void;
}

export function NestedDropdown({ options, label, setOption }: SelectDropdownProps) {
  const [selectedOption, setSelectedOption] = useState<NestedOption | null>(null);
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);

  return (
    <div className="relative z-40">
      {/* Main Dropdown */}
      <div
        className="w-[180px] border border-gray-200 rounded-md p-2 cursor-pointer"
        onClick={() => setIsMainDropdownOpen(!isMainDropdownOpen)}
      >
        {label}
      </div>

      {/* Main Dropdown Options */}
      {isMainDropdownOpen && (
        <div className="absolute top-10 left-0 bg-white border border-gray-200 rounded-md w-[180px]">
          {options.map((option, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer flex flex-row items-center justify-between"
              onClick={() => {
                setSelectedOption(option);
                //setOption(option);
              }}
            >
              <span className="text-sm">{option.label}</span>
              <ChevronRight size={15}/>
            </div>
          ))}
        </div>
      )}

      {/* Sub-Options Dropdown (Cascading) */}
      {selectedOption?.subOptions && isMainDropdownOpen && (
        <div className="absolute top-10 left-[180px] bg-white border rounded-md border-gray-200 w-[180px]">
          {selectedOption.subOptions.map((subOption, idx) => (
            <div
              key={idx}
              className="p-2 hover:bg-gray-200 cursor-pointer text-sm"
              onClick={() => {setOption(subOption);setIsMainDropdownOpen(!isMainDropdownOpen)}}
            >
              {subOption.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}