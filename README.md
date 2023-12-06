# About the task

This application addresses the following challenge:

```
The idea:
Karima has just arrived in a new city, she has a lot of questions and only people
close to her location can answer them.
Your task is to implement an app that allows people like Karima to post
questions related to a location and get answers from other users close by, users can
see questions posted nearby their location and they can keep track of their favorite
ones.

Features:
1. As a User, I can sign up using my email & password
2. As a User, I can sign in using my email & password
3. As a User, I can reset my password in case i forgot it
4. As a User, I can post a question with these attributes title, content, location
5. As a User, I can post an answer to a question
6. As a User, I can display the list of questions sorted by distance
7. As a User, I can like a question, so it can be added to my favorites
8. As a User, I’ll get an email notification each time someone answers or liked my
question (Optional use MongoDB change streams)
9. As a User, By 6pm I’ll get a list of users that answers my questions and their
answers
10.[Optional] As a User, I can display the list of liked questions
11.[Optional] As a User, I can remove a question from my favorites list
12.[Optional] As a User, I can list questions on a map (Google Maps)
13. [Optional]: Dockerize your app
```

You can review this video demonstration that illustrates the final results of the project.
[![Screenshot from 2023-12-06 13-20-42](https://github.com/abdeltif-b/gwala-demo/assets/60190704/b549f859-1c8e-43a2-935c-ad33b997b231)](https://drive.google.com/file/d/1JaRMCtMAQKCiLMIkgeHEXbMGwKCcisyt/view?usp=drive_link)

# Technologies Used

Gwala-demo is built using:

- Next.js: Used to build the client side. It is written in TypeScript. The App route is used in this project [Next.js Docs](https://nextjs.org/docs#app-router-vs-pages-router).
- Express.js: Used to build the server side. It is written in JavaScript.
- MongoDB: Used as a database. Mongoose is used as an ODM (Object Database Modeling).
- Jest: Used for unit testing. Example tests are located [here](https://github.com/abdeltif-b/gwala-demo/blob/main/server/__tests__/computeDistance.test.js) to test the [computeDistance](https://github.com/abdeltif-b/gwala-demo/blob/main/server/src/utils/computeDistance.js) function that returns questions based on their location distance compared to the user's location. Run `npm run test` to execute tests.
- Tailwind & Shadcn: Used as a CSS framework and UI component library, respectively.
- Faker: Used to generate demo data in the MongoDB database. The definition of the [demo data](https://github.com/abdeltif-b/gwala-demo/blob/main/server/src/scripts/demoData.js) is here. To manually run the script, use `npm run init`.

# Getting started

This application uses Mapbox maps. Before running the app, make sure to update the `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` variable in [.env](https://github.com/abdeltif-b/gwala-demo/blob/main/client/.env) of the client app with your MapBox access token. You can get a free one from their website [MapBox](https://www.mapbox.com/).

_OR_
temporarily, you can use this generated access token:
`pk.eyJ1IjoiYWJvMDA3IiwiYSI6ImNscG5kNXdpMjBrYnEybXQzZGprY2JtZm8ifQ.s-adKDuVvFM0JueIMawpLg`

to get started

1. Clone the project

   ```
   git clone https://github.com/abdeltif-b/gwala-demo.git
   ```

2. Update the environment variables as needed or use the default variables (make sure to update `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN`).

- [/client/.env](https://github.com/abdeltif-b/gwala-demo/blob/main/client/.env) contains the environment variables for the Next.js app.
- [/server/.env](https://github.com/abdeltif-b/gwala-demo/blob/main/server/.env) contains the environment variables for the Express.js app.
- [.db.env](https://github.com/abdeltif-b/gwala-demo/blob/main/.db.env) contains the environment variables for the MongoDB instance.

3. Build and run with the following command. Install Docker and Docker Compose if needed.

```

docker-compose up --build

```

4. The app is now running at `http://localhost:3000/` with pre-generated demo data.

Please check [this issue](https://github.com/abdeltif-b/gwala-demo/issues/1) for the remaining tasks due to time constraints and check other known issues [here](https://github.com/abdeltif-b/gwala-demo/issues) with this version.
