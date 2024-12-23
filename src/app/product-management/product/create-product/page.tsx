"use client"

import { GET_USER_BY_ID } from "@/lib/apolloClient/query/userQuery";
import { useAccount } from "@/lib/context/account-context";
import ProductForm from "@/modules/components/product-management/productForm";
import { useQuery } from "@apollo/client";
import React from "react";

const CreateProduct : React.FC = () => {
    const {userId} = useAccount();
    const {data:userInfo} = useQuery(GET_USER_BY_ID,{
        variables:{
            id: userId
        }
    })
    const user = userInfo? userInfo.users?.[0] : [];
    return(
        <div className="">
            <ProductForm shop_id={user.shop_id}/>
        </div>
    )
}

export default CreateProduct;