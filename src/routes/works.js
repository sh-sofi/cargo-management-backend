import express from "express";
import {
  getAllCompletedWorks,
  getCompletedWorkById,
  addCompletedWork,
  updateCompletedWork,
  deleteCompletedWork,
} from "../controllers/workController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     CompletedWork:
 *       type: object
 *       required:
 *         - route
 *         - drivers
 *         - departureDate
 *         - returnDate
 *         - finalSums
 *       properties:
 *         _id:
 *           type: string
 *           example: "64a9b8c5e58b9b001c4a3b80"
 *         route:
 *           type: string
 *           description: ID маршруту
 *           example: "64a9b8c5e58b9b001c4a3b7f"
 *         drivers:
 *           type: array
 *           items:
 *             type: string
 *           description: Масив ID водіїв
 *           example: ["64a9b8c5e58b9b001c4a3b7e", "64a9b8c5e58b9b001c4a3b7d"]
 *         departureDate:
 *           type: string
 *           format: date
 *           example: "2025-03-01"
 *         returnDate:
 *           type: string
 *           format: date
 *           example: "2025-03-05"
 *         paymentBonus:
 *           type: number
 *           description: Додатковий бонус до виплати
 *           example: 500
 *         finalSums:
 *           type: array
 *           items:
 *             type: number
 *           description: Остаточні суми виплат для кожного водія
 *           example: [10500, 11000]
 */

/**
 * @swagger
 * tags:
 *   name: CompletedWorks
 *   description: API для роботи з виконаними перевезеннями
 */

/**
 * @swagger
 * /api/completedWorks:
 *   get:
 *     summary: Отримати всі виконані перевезення
 *     tags: [CompletedWorks]
 *     responses:
 *       200:
 *         description: Список виконаних перевезень
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CompletedWork'
 */
router.get("/completedWorks", getAllCompletedWorks);

/**
 * @swagger
 * /api/completedWorks/{id}:
 *   get:
 *     summary: Отримати інформацію про конкретне виконане перевезення
 *     tags: [CompletedWorks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID виконаного перевезення
 *     responses:
 *       200:
 *         description: Дані про виконане перевезення
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CompletedWork'
 *       404:
 *         description: Перевезення не знайдено
 */
router.get("/completedWorks/:id", getCompletedWorkById);

/**
 * @swagger
 * /api/completedWorks:
 *   post:
 *     summary: Додати нове виконане перевезення
 *     tags: [CompletedWorks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CompletedWork'
 *     responses:
 *       201:
 *         description: Виконане перевезення успішно створено
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CompletedWork'
 *       400:
 *         description: Невірні вхідні дані
 */
router.post("/completedWorks", addCompletedWork);

/**
 * @swagger
 * /api/completedWorks/{id}:
 *   put:
 *     summary: Оновити дані виконаного перевезення
 *     tags: [CompletedWorks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID виконаного перевезення
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CompletedWork'
 *     responses:
 *       200:
 *         description: Дані перевезення оновлено
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CompletedWork'
 *       404:
 *         description: Перевезення не знайдено
 */
router.put("/completedWorks/:id", updateCompletedWork);

/**
 * @swagger
 * /api/completedWorks/{id}:
 *   delete:
 *     summary: Видалити виконане перевезення
 *     tags: [CompletedWorks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID виконаного перевезення
 *     responses:
 *       200:
 *         description: Перевезення успішно видалено
 *       404:
 *         description: Перевезення не знайдено
 */
router.delete("/completedWorks/:id", deleteCompletedWork);

export default router;
