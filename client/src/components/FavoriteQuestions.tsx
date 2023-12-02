import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { getFavoriteQuestions } from "@/lib/data";
import { TrashIcon } from "@radix-ui/react-icons";

export const FavoriteQuestions = async () => {
  const questions = getFavoriteQuestions();
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>My favorite questions</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea>
            <div>
              {questions.length
                ? questions.map((item) => (
                    <div key={item.id}>
                      <div className="text-sm flex justify-between">
                        <div>
                          <div>{item.title}</div>
                        </div>
                        <Button variant="destructive" size="icon" title="Remove from favorite list">
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                      <Separator className="my-2" />
                    </div>
                  ))
                : "Your favorite list is empty"}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};
