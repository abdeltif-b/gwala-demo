import { FavoriteQuestions } from "@/components/FavoriteQuestions";
import { QuestionsByDistance } from "@/components/QuestionsByDistance";
import { QuestionsLocation } from "@/components/QuestionsLocation";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = true;

  if (!session) redirect("auth/signin");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
      <div className="col-span-1 space-y-4">
        <QuestionsByDistance />
        <FavoriteQuestions />
      </div>
      <div className="md:col-span-1">
        <QuestionsLocation />
      </div>
    </div>
  );
}
