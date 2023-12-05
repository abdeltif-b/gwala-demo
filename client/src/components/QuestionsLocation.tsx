import { QuestionsMap } from "@/components/QuestionsMap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getQuestionsLocation } from "@/lib/data";

export const QuestionsLocation = async () => {
  const locations = await getQuestionsLocation();

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Questions by location</CardTitle>
        </CardHeader>
        <CardContent className="h-screen mb-[-120px] pb-36">
          <QuestionsMap locations={locations} />
        </CardContent>
      </Card>
    </div>
  );
};
