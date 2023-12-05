import { AskQuestion } from "@/components/AskQuestion";
import { QuestionAnswers } from "@/components/QuestionAnswers";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { getQuestionsByDistance, getUserInfo } from "@/lib/data";

export const QuestionsByDistance = async () => {
  const user = await getUserInfo();
  const questions = await getQuestionsByDistance(user._id);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Questions sorted by distance</CardTitle>
          <CardDescription>
            Your current location is <b>{user.location.name}</b>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="rounded-md border p-2 h-[220px]">
            <div>
              {questions.length
                ? questions.map((item) => (
                    <div key={item._id}>
                      <div className="text-sm flex justify-between">
                        <div>
                          <div>{item.title}</div>
                          <div className="text-xs text-gray-600">{item.location?.name}</div>
                        </div>
                        <QuestionAnswers questionId={item._id} />
                      </div>
                      <Separator className="my-2" />
                    </div>
                  ))
                : "No questions asked yet"}
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <AskQuestion />
        </CardFooter>
      </Card>
    </div>
  );
};
