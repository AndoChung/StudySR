import "dotenv/config";
import express from "express";
import db from "./config/database.js";
import cors from "cors";

import userRoutes from "./routes/UserRoutes.js";

try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

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

app.use("/user", userRoutes);

app.get("/", (req, res) => {
    res.send("hello this is my server");
});

app.listen(3001, () => {
    console.log("server is up");
});
