import "dotenv/config";
import express from "express";
import db from "./config/database.js";
import User from "./models/UserModel.js";

const app = express();

try {
  await db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.post("/users", async (req, res) => {
  await User.create({req.})
})



app.get("/", (req, res) => {
  res.send("hello this is my server");
});

app.listen(3001, () => {
  console.log("server is up");
});
