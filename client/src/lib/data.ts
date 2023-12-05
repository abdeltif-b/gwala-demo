"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const getLocations = async () => {
  try {
    const response = await fetch(process.env.SERVER_URL + "/api/locations/");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getQuestionsByDistance = async (userId: string) => {
  try {
    const response = await fetch(process.env.SERVER_URL + `/api/questions/${userId}`, {
      next: { tags: ["questions"] },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getQuestionsLocation = async () => {
  try {
    const response = await fetch(process.env.SERVER_URL + "/api/questions-location/", {
      next: { tags: ["questions-location"] },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getFavoriteQuestions = async (userId: string) => {
  try {
    const response = await fetch(process.env.SERVER_URL + `/api/favorites/${userId}`, {
      next: { tags: ["favorites"] },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const unlikeQuestion = async (userId: string, questionId: string, formData: FormData) => {
  try {
    const response = await fetch(process.env.SERVER_URL + "/api/favorites", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: userId,
        question: questionId,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    await response.json();
    console.log("Data deleted successfully");
    revalidateTag("favorites");
  } catch (error) {
    console.error("Error posting data:", error);
  }
};

export async function likeQuestion(userId: string, questionId: string, formData: FormData) {
  try {
    const response = await fetch(process.env.SERVER_URL + "/api/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: userId,
        question: questionId,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data posted successfully");
    revalidateTag("favorites");
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

export const getUserInfo = async () => {
  try {
    // mocked user for demo purpose
    const data = {
      _id: "000000017c849534f3a94556",
      username: "user",
      email: "email@example.com",
      location: {
        name: "Casablanca",
        coordinates: { latitude: 33.589886, longitude: -7.603869 },
      },
    };
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getQuestionDetailsById = async (questionId: string) => {
  try {
    const response = await fetch(process.env.SERVER_URL + `/api/question/${questionId}`, {
      next: { tags: ["questionId"] },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const addQuestion = async (userId: string, formData: FormData) => {
  try {
    const response = await fetch(process.env.SERVER_URL + "/api/questions/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.get("title"),
        content: formData.get("content"),
        location: formData.get("location"),
        user: userId,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data posted successfully");
    revalidateTag("questions");
  } catch (error) {
    console.error("Error posting data:", error);
  }
};
export const addAnswer = async (userId: string, questionId: string, formData: FormData) => {
  try {
    const response = await fetch(process.env.SERVER_URL + "/api/answers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: formData.get("content"),
        question: questionId,
        user: userId,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    revalidatePath("questionId");
    console.log("Data posted successfully");
  } catch (error) {
    console.error("Error posting data:", error);
  }
};
