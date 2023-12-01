import { FavoriteQuestions } from "@/app/components/FavoriteQuestions";
import { QuestionsByDistance } from "@/app/components/QuestionsByDistance";
import { QuestionsOnMap } from "@/app/components/QuestionsOnMap";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = true;

  if (!session) redirect("auth/signin");

  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <QuestionsByDistance />
      <QuestionsOnMap />
      <FavoriteQuestions />
    </div>
  );
}
