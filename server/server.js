import "dotenv/config";
import express from "express";
import db from "./config/database.js";
import User from "./models/UserModel.js";
import cors from "cors";

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
        allowedHeaders: ["Content-Type"],
    })
);

app.use(express.json());

try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

app.post("/user/register", async (req, res) => {
    try {
        const newUser = {
            password: req.body.password,
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
        };

        const user = await User.create(newUser);

        return res.status(201).send(user);
    } catch (error) {
        console.error("Unable to post to the database", error)
    }
});

app.get("/", (req, res) => {
    res.send("hello this is my server");
});

app.listen(3001, () => {
    console.log("server is up");
});
