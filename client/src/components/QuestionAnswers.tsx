import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { addAnswer, getQuestionDetailsById, getUserInfo, likeQuestion } from "@/lib/data";
import { ExternalLinkIcon, HeartIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AddAnswerForm } from "@/components/forms/AddAnswerForm";
import LikeQuestionForm from "@/components/forms/LikeQuestionForm";

export async function QuestionAnswers({ questionId }: { questionId: string }) {
  const user = await getUserInfo();
  const questionDetails = await getQuestionDetailsById(questionId);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="icon" title="Show details">
          <ExternalLinkIcon className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="sm:max-w-[625px]">
        <AlertDialogHeader>
          <AlertDialogTitle>
            {questionDetails.title} <Badge variant="outline">{questionDetails.location.name}</Badge>
          </AlertDialogTitle>
          <AlertDialogDescription>
            Asked by <b>{questionDetails.user?.username}</b> at{" "}
            <b>{new Date(questionDetails.createdAt).toLocaleString()}</b>{" "}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="grid gap-4 py-4">{questionDetails.content}</div>

        <LikeQuestionForm questionId={questionId} userId={user!._id} />

        <ScrollArea className="rounded-md border p-2 h-[220px]">
          <div className="font-bold text-md">Answers</div>
          <div>
            {questionDetails.answers.length
              ? questionDetails.answers.reverse().map((item: any) => (
                  <div key={item.id} className="gap-1">
                    <Separator className="my-2" />
                    <div className="text-sm">{item.content}</div>
                    <div className="text-xs text-gray-600">
                      Answered by <b>{item.user.username}</b> at <b>{new Date(item.createdAt).toLocaleString()}</b>
                    </div>
                  </div>
                ))
              : "Be the first to answer this question!"}
          </div>
        </ScrollArea>
        <AddAnswerForm questionId={questionId} userId={user!._id} />
      </AlertDialogContent>
    </AlertDialog>
  );
}
