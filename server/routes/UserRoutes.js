import express from "express";
import { registerUser, findUser } from "../controllers/UserControllers.js";

const router = express.Router();

router.post("/register", registerUser)
router.get("/:username", findUser)

export default router;