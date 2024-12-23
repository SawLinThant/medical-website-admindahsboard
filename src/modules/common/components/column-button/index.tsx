import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ActionButton = ({ id }: { id: string }) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/shop/shop-detail/${id}`);
  };

  return (
    <div className="flex items-center justify-center">
      <Button
        onClick={handleEdit}
        className="bg-inputlabel/85 text-white rounded-md"
      >
        Edit
      </Button>
    </div>
  );
};

export default ActionButton
