import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getQuestionDetailsById } from "@/lib/data";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export const QuestionAnswers = async ({ questionId }: { questionId: number }) => {
  const userId = 1;
  const questionDetails = getQuestionDetailsById(questionId, userId);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <ExternalLinkIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {questionDetails.title} <Badge variant="outline">{questionDetails.location}</Badge>
          </DialogTitle>
          <DialogDescription>
            Asked by <b>{questionDetails.createdBy}</b> at <b>{questionDetails.createdAt}</b>
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">{questionDetails.content}</div>

        <ScrollArea className="rounded-md border p-2">
          <div className="font-bold text-md">Answers</div>
          <div>
            {questionDetails.answers.map((item) => (
              <div key={item.id} className="gap-1">
                <Separator className="my-2" />
                <div className="text-sm">{item.content}</div>
                <div className="text-xs text-gray-600">
                  Answered by <b>{item.createdBy}</b> at <b>{item.createdAt}</b>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <Textarea id="content" placeholder="Add your answer" />

        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
