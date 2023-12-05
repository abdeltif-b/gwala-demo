import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { getLocations, getUserInfo } from "@/lib/data";
import { PlusIcon } from "@radix-ui/react-icons";
import AskQuestionForm from "@/components/forms/AskQuestionForm";

export const AskQuestion = async () => {
  const user = await getUserInfo();
  const locations = await getLocations();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Ask a new question
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[625px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Ask a new question</AlertDialogTitle>
        </AlertDialogHeader>
        <AskQuestionForm userId={user._id} locations={locations} />
      </AlertDialogContent>
    </AlertDialog>
  );
};
