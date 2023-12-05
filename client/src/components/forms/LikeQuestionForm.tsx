"use client";
import React, { useRef } from "react";

import { Button } from "@/components/ui/button";
import { likeQuestion } from "@/lib/data";
import { HeartIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";

export default function LikeQuestionForm({ questionId, userId }: { questionId: string; userId: string }) {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        const likeQuestionWithData = likeQuestion.bind(null, userId).bind(null, questionId);
        const result = await likeQuestionWithData(formData);

        // reset the form
        ref.current?.reset();
        console.log("result", result);
        toast.success("Question saved to your favorite!");
      }}
    >
      <Button type="submit" variant="outline" title="Add question to favorite">
        <HeartIcon className="mr-2 h-4 w-4" />
        Add to favorite
      </Button>
    </form>
  );
}
