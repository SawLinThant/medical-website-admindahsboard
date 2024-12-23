import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ActionButtonProps {
    id: string
    route: string
}

const ActionButton = ({id,route}:ActionButtonProps) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`${route}/${id}`);
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
