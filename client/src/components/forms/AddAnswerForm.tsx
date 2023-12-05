"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AlertDialogAction, AlertDialogCancel, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { addAnswer } from "@/lib/data";
import { toast } from "sonner";
import { useRef } from "react";

export const AddAnswerForm = ({ questionId, userId }: { questionId: string; userId: string }) => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        const addAnswerWithData = addAnswer.bind(null, userId).bind(null, questionId);

        const result = await addAnswerWithData(formData);

        // reset the form
        ref.current?.reset();
        toast.success("Answer added");
        window.location.reload();
      }}
    >
      <div className="grid gap-4 py-4">
        <Textarea name="content" placeholder="Add your answer" />
      </div>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>
          <Button type="submit">Submit</Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </form>
  );
};
