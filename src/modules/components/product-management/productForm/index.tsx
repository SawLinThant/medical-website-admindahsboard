import { Label } from "@/components/ui/label";
import { options } from "@/lib/constant";
import { BackButton } from "@/modules/common/components/button";
import CustomInput from "@/modules/common/components/custom-input";
import CustomTextArea from "@/modules/common/components/custom-textarea";
import Combobox from "@/modules/common/components/dropdown";
import InputTag from "@/modules/common/components/tag-input";
import React from "react";

const ProductForm: React.FC = () => {
  return (
    <section className="w-full flex flex-col gap-4">
      <div className="w-full min-h-20 flex flex-row items-center gap-2">
        <div className="h-11 w-11">
          <BackButton />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm text-muted-foreground">
            Back to product list
          </div>
          <h1 className="text-headercolor font-bold text-xl">
            Add New Product
          </h1>
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-2 md:grid-cols-1 min-h-32">
        <div className="w-[30rem] h-full flex flex-col gap-8">
          <div className="w-full min-h-20 flex flex-col gap-2">
            <h2 className="font-bold text-lg text-headercolor">Description</h2>
            <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
              <div className="w-1/2">
                <CustomInput
                  name="name"
                  label="Product Name"
                  placeHolder="Enter product name"
                  type="text"
                />
              </div>
              <CustomTextArea
               placeHolder="Enter Porduct Description Here"
               label="Product Description"
               name="description"
              />
            </div>
          </div>
          <div className="w-full min-h-20 flex flex-col gap-2">
            <h2 className="font-bold text-lg text-headercolor">Category & Tag</h2>
            <div className="w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8">
              <div className="w-full flex flex-col gap-2">
               <Label className="text-inputlabel">Product Category</Label>
               <Combobox options={options}/>
              </div>
              <div className="w-full flex flex-col gap-2">
               <Label className="text-inputlabel">Tags</Label>
               {/* <Combobox options={options}/> */}
               <InputTag options={options}/>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full p-3 flex flex-col gap-4"></div>
      </div>
    </section>
  );
};
export default ProductForm;
