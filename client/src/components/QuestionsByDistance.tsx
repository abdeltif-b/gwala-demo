import { AskQuestion } from "@/components/AskQuestion";
import { QuestionAnswers } from "@/components/QuestionAnswers";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { getQuestionsByDistance } from "@/lib/data";

export const QuestionsByDistance = async () => {
  const questions = getQuestionsByDistance();
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>List of questions sorted by distance</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea>
            <div>
              {questions.map((item) => (
                <div key={item.id}>
                  <div className="text-sm flex justify-between">
                    <div>
                      <div>{item.title}</div>
                      <div className="text-xs text-gray-600">{item.location}</div>
                    </div>
                    <QuestionAnswers questionId={item.id} />
                  </div>
                  <Separator className="my-2" />
                </div>
              ))}
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
