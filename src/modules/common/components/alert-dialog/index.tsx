import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

interface DialogProps {
  caption: string;
  heading: string;
  label: string;
  action?: () => void;
  actionLoading?: boolean;
  actionDescription?: string;
}

export function CustomAlertDialog({
  caption,
  heading,
  label,
  actionLoading,
  actionDescription,
  action
}: DialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-full" asChild>
        <Button variant="outline">{label}</Button>
      </AlertDialogTrigger>

      {actionLoading ? (
        <AlertDialogContent className="max-w-[300px]">
          <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
            <span className="font-semibold text-lg">{actionDescription}</span>
            <Loader size={25} className="animate-spin" />
          </div>
        </AlertDialogContent>
      ) : (
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{heading}</AlertDialogTitle>
            <AlertDialogDescription>{caption}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={action}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      )}
    </AlertDialog>
  );
}
