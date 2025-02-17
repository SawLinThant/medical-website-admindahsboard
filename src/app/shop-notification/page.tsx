"use client"

import { GET_USER_BY_ID } from "@/lib/apolloClient/query/userQuery";
import { useAccount } from "@/lib/context/account-context";
import Notification from "@/modules/components/shop-notification";
import { useQuery } from "@apollo/client";

const ShopNotification : React.FC = () => {
    const {userId} = useAccount();
    const {data:userInfo} = useQuery(GET_USER_BY_ID,{
            variables:{
                id: userId
            }
        })
        const user = userInfo? userInfo.users?.[0] : [];
    return(
        <div className="">
            {/* <Notification shop_id={user.shop_id}/> */}
        </div>
    )
}

export default ShopNotification;