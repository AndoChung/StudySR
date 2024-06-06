import express from "express";

const app = express();

app.get("/", (req,res) => {
    res.send("hello this is my server")
})

app.listen(3001, () => {
    console.log("server is up")
})
