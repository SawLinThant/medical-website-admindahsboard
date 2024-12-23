
"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetShopCategories, useGetShops } from "@/lib/hooks/useGetQuery";
import { DataTable } from "@/modules/common/components/custom-table";
import { shopcolumns } from "@/modules/common/components/custom-table/column";
import { PaginationControll } from "@/modules/common/components/pagination";
import { SelectDropdown } from "@/modules/common/components/select-dropdown";
import { Search, SquarePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ShopList: React.FC = () => {
  const { shops, setTake, setFilters, page, setPage, totalCount } =
    useGetShops();
  const itemPerPage = 10;
  const router = useRouter();
  const { shopCategories } = useGetShopCategories();
  const [category, setCategory] = useState<string>("");
  const [searchName, setSearchName] = useState<string>("");
  const totalPages = Math.ceil(totalCount / itemPerPage);
  useEffect(() => {
    setTake(itemPerPage);
    setFilters({
      name: searchName,
      shop_category: category === "all" ? undefined : category,
    });
  }, [searchName, category, setFilters, setTake]);
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  console.log(totalCount)
  return (
    <div className="w-full h-full flex flex-col gap-4 p-4">
      <h2 className="font-bold text-xl">Shops</h2>
      <div className="min-h-24 w-full flex flex-row items-center justify-between">
        <div className="">
          <Button onClick={() => router.push("/shop/shop-create")} className="flex items-center min-h-10 bg-inputlabel rounded-md">
            <SquarePlus color="white" />
            Create Shop
          </Button>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="relative">
            <Input
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              placeholder="Search"
              className="pl-10 py-4 w-[150px] border border-gray-400"
            />
            <div className="absolute top-2 left-2">
              <Search className="" />
            </div>
          </div>
          <SelectDropdown
            setOption={setCategory}
            options={shopCategories}
            label="Sort By"
          />
        </div>
      </div>
      <DataTable data={shops} columns={shopcolumns} />
      <PaginationControll
        totalPages={totalPages}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default ShopList;
