"use client"

import DeliveryUserDetailForm from "@/modules/components/delivery/delivery-user-detail-form";
import { useParams } from "next/navigation";

const DeliveryUserDetail : React.FC = () => {
    const {id} = useParams() as {id: string};
    return(
        <div className="">
            <DeliveryUserDetailForm id= {id}/>
        </div>
    )
}
export default DeliveryUserDetail