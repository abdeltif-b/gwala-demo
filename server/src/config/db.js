import mongoose from "mongoose";

export default function connectDB() {
  try {
    mongoose.connect(process.env.DB_URL, {
      dbName: process.env.DB_NAME,
      auth: { username: process.env.DB_USERNAME, password: process.env.DB_PASSWORD },
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  const dbConnection = mongoose.connection;

  dbConnection.once("open", (_) => {
    console.log(`Database connected`);
  });

  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });

  return;
}
