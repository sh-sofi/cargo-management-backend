import express from "express";
import {
  getAllRoutes,
  getRouteById,
  addRoute,
  updateRoute,
  deleteRoute,
} from "../controllers/routeController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Route:
 *       type: object
 *       required:
 *         - name
 *         - distance
 *         - daysOnRoad
 *         - payment
 *       properties:
 *         _id:
 *           type: string
 *           example: "64a9b8c5e58b9b001c4a3b7f"
 *         name:
 *           type: string
 *           example: "Київ - Львів"
 *         distance:
 *           type: number
 *           example: 540
 *         daysOnRoad:
 *           type: number
 *           example: 2
 *         payment:
 *           type: number
 *           example: 10000
 */

/**
 * @swagger
 * tags:
 *   name: Routes
 *   description: API для роботи з маршрутами
 */

/**
 * @swagger
 * /api/routes:
 *   get:
 *     summary: Отримати всі маршрути
 *     tags: [Routes]
 *     responses:
 *       200:
 *         description: Список маршрутів
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Route'
 */
router.get("/routes", getAllRoutes);

/**
 * @swagger
 * /api/routes/{id}:
 *   get:
 *     summary: Отримати інформацію про конкретний маршрут
 *     tags: [Routes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID маршруту
 *     responses:
 *       200:
 *         description: Дані про маршрут
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Route'
 *       404:
 *         description: Маршрут не знайдено
 */
router.get("/routes/:id", getRouteById);

/**
 * @swagger
 * /api/routes:
 *   post:
 *     summary: Додати новий маршрут
 *     tags: [Routes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Route'
 *     responses:
 *       201:
 *         description: Маршрут успішно створено
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Route'
 *       400:
 *         description: Невірні вхідні дані
 */
router.post("/routes", addRoute);

/**
 * @swagger
 * /api/routes/{id}:
 *   put:
 *     summary: Оновити дані маршруту
 *     tags: [Routes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID маршруту
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Route'
 *     responses:
 *       200:
 *         description: Дані маршруту оновлено
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Route'
 *       404:
 *         description: Маршрут не знайдено
 */
router.put("/routes/:id", updateRoute);

/**
 * @swagger
 * /api/routes/{id}:
 *   delete:
 *     summary: Видалити маршрут
 *     tags: [Routes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID маршруту
 *     responses:
 *       200:
 *         description: Маршрут успішно видалено
 *       404:
 *         description: Маршрут не знайдено
 */
router.delete("/routes/:id", deleteRoute);

export default router;
