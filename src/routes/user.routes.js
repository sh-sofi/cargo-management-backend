import express from "express";
import { getAllUsers, getProfile } from "../controllers/userController.js";
import { verifyToken, isAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API для керування користувачами
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Отримати список всіх користувачів (тільки для адміністраторів)
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Успішно отримано список користувачів
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       401:
 *         description: Неавторизований (немає токена або неправильний токен)
 *       403:
 *         description: Заборонено (недостатньо прав)
 */
router.get("/", verifyToken, isAdmin, getAllUsers);

/**
 * @swagger
 * /api/users/profile:
 *   get:
 *     summary: Отримати профіль поточного користувача
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Успішно отримано дані профілю
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Неавторизований (немає токена або неправильний токен)
 */
router.get("/profile", verifyToken, getProfile);

export default router;
