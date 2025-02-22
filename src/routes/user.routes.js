import express from "express";
import { getAllUsers, getProfile } from "../controllers/userController.js";
import { verifyToken, isAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", verifyToken, isAdmin, getAllUsers);
router.get("/profile", verifyToken, getProfile);

export default router;
