import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; 

interface ShopOption {
  label: string;
  value: string;
}

interface MultiShopSelectDropdownProps {
  shops: { id: string; name: string }[]; 
  onShopChange: (selectedShopIds: string[]) => void; 
  label?: string;
}

const MultiShopSelectDropdown: React.FC<MultiShopSelectDropdownProps> = ({
  shops,
  onShopChange,
  label,
}) => {
  const [selectedShops, setSelectedShops] = useState<string[]>([]);

  const shopOptions: ShopOption[] = [
    { label: `All ${label}`, value: "all" },
    ...shops.map((shop) => ({ label: shop.name, value: shop.id })),
  ];

  const handleSelectChange = (value: string) => {
    if (value === "all") {
      setSelectedShops([]);
      onShopChange([]); 
    } else {
      const newSelectedShops = selectedShops.includes(value)
        ? selectedShops.filter((id) => id !== value)
        : [...selectedShops, value];
      setSelectedShops(newSelectedShops);
      onShopChange(newSelectedShops);
    }
  };

  return (
    <div>
      <Select onValueChange={handleSelectChange} value={selectedShops.join(",") || "all"}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select Shops" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {shopOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={
                      option.value === "all"
                        ? selectedShops.length === 0
                        : selectedShops.includes(option.value)
                    }
                    onChange={() => {}} // Handled by Select onValueChange
                    className="mr-2"
                  />
                  {option.label}
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default MultiShopSelectDropdown;