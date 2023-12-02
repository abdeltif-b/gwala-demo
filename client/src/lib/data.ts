export const getLocations = () => {
  const data = ["rabat", "casablanca", "fes"];
  return data;
};

export const getQuestionsByDistance = () => {
  const data = [
    {
      id: 1,
      title: "question 1?",
      location: "Rabat",
    },
    {
      id: 2,
      title: "question 2?",
      location: "Meknes",
    },
    {
      id: 3,
      title: "question 3?",
      location: "Casa",
    },
    {
      id: 4,
      title: "question 4?",
      location: "Casa",
    },
  ];
  return data;
};
export const getFavoriteQuestions = () => {
  const data = [
    {
      id: 1,
      title: "question 1?",
    },
    {
      id: 2,
      title: "question 2?",
    },
    {
      id: 3,
      title: "question 3?",
    },
    {
      id: 4,
      title: "question 4?",
    },
  ];
  return data;
};

export const getQuestionDetailsById = (questionId: number, userId: number) => {
  const data = {
    id: 1,
    title: "question 1?",
    location: "Rabat",
    content: "This is the content of the question...",
    createdBy: "user1",
    createdAt: "01-01-2023",
    isUserFavorite: true,
    answers: [
      {
        id: 1,
        content: "answer 1 of the question",
        createdBy: "user1",
        createdAt: "01-01-2023",
      },
      {
        id: 2,
        content: "answer 2 of the question",
        createdBy: "user2",
        createdAt: "01-21-2023",
      },
    ],
  };
  return data;
};
