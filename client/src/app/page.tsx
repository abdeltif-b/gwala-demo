import { FavoriteQuestions } from "@/components/FavoriteQuestions";
import { QuestionsByDistance } from "@/components/QuestionsByDistance";
import { QuestionsLocation } from "@/components/QuestionsLocation";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = true;

  if (!session) redirect("auth/signin");

  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <QuestionsByDistance />
      <QuestionsOnMap />
      <FavoriteQuestions />
        <QuestionsLocation />
    </div>
  );
}
