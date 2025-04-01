import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ActionButtonProps {
    id: string
    route: string
    label?: string
}

const ActionButton = ({id,route, label = "Edit"}:ActionButtonProps) => {
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
        {label}
      </Button>
    </div>
  );
};

export default ActionButton
