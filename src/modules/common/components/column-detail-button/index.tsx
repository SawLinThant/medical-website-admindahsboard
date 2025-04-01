import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ActionButtonProps {
    id: string
    route: string
    label?:string
}

const DetaiRouteButton = ({id,route, label = "View Detail"}:ActionButtonProps) => {
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
        {label}
      </Button>
    </div>
  );
};

export default DetaiRouteButton
