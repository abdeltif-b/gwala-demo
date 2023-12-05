import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { getFavoriteQuestions, getUserInfo, unlikeQuestion } from "@/lib/data";
import { TrashIcon } from "@radix-ui/react-icons";

export const FavoriteQuestions = async () => {
  const user = await getUserInfo();
  const { likedQuestions } = await getFavoriteQuestions(user._id);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>My favorite questions</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="rounded-md border p-2 h-[220px]">
            <div>
              {likedQuestions.length
                ? likedQuestions.map((item) => (
                    <div key={item._id}>
                      <div className="text-sm flex justify-between">
                        <div>
                          <div>{item.title}</div>
                        </div>
                        <form action={unlikeQuestion.bind(null, user._id).bind(null, item._id)}>
                          <Button type="submit" variant="destructive" size="icon" title="Remove from favorite list">
                            <TrashIcon className="h-4 w-4" />
                          </Button>
                        </form>
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
