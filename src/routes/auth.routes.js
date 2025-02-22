import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: API для реєстрації та входу користувачів
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "65d7a8e5fcd9a4001b2c4b9f"
 *         username:
 *           type: string
 *           example: "ivan_petrenko"
 *         email:
 *           type: string
 *           format: email
 *           example: "ivan.petrenko@example.com"
 *         role:
 *           type: string
 *           enum: ["user", "admin"]
 *           example: "admin"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2024-02-23T14:00:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2024-02-23T14:30:00.000Z"
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Реєстрація нового користувача
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: "ivan_petrenko"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "ivan.petrenko@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "securepassword123"
 *     responses:
 *       201:
 *         description: Користувача зареєстровано
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User registered"
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       400:
 *         description: Помилка реєстрації (наприклад, email вже зайнятий)
 */
router.post("/register", register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Вхід користувача
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "ivan.petrenko@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "securepassword123"
 *     responses:
 *       200:
 *         description: Успішний вхід
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsIn..."
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       400:
 *         description: Помилка авторизації (невірний email або пароль)
 */
router.post("/login", login);

export default router;
