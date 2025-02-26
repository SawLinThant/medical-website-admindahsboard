"use client";

import AdDetailForm from "@/modules/components/advertisement/ad-detail";
import { useParams } from "next/navigation";

const AdDetail: React.FC = () => {
  const { id } = useParams() as { id: string };
  return (
    <div className="">
      <AdDetailForm id={id} />
    </div>
  );
};

export default AdDetail;
