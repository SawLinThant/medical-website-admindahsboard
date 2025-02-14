import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ActionButtonProps {
    id: string
    route: string
}

const DetaiRouteButton = ({id,route}:ActionButtonProps) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`${route}?productID=${id}`);
  };

  return (
    <div className="flex items-center justify-center">
      <Button
      variant="outline"
        onClick={handleEdit}
        className="border-none text-secondary_color bg-transparent underline hover:bg-transparent hover:text-blue-500"
      >
        View Details
      </Button>
    </div>
  );
};

export default DetaiRouteButton
