import express from "express";
import {
  getAllDrivers,
  getDriverById,
  addDriver,
  updateDriver,
  deleteDriver,
} from "../controllers/driverController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Driver:
 *       type: object
 *       required:
 *         - lastName
 *         - firstName
 *         - middleName
 *         - experience
 *       properties:
 *         _id:
 *           type: string
 *           example: "64a9b8c5e58b9b001c4a3b7e"
 *         lastName:
 *           type: string
 *           example: "Петренко"
 *         firstName:
 *           type: string
 *           example: "Іван"
 *         middleName:
 *           type: string
 *           example: "Олексійович"
 *         experience:
 *           type: number
 *           example: 5
 */

/**
 * @swagger
 * tags:
 *   name: Drivers
 *   description: API для роботи з водіями
 */

/**
 * @swagger
 * /api/drivers:
 *   get:
 *     summary: Отримати всіх водіїв
 *     tags: [Drivers]
 *     responses:
 *       200:
 *         description: Список водіїв
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Driver'
 */
router.get("/drivers", getAllDrivers);

/**
 * @swagger
 * /api/drivers/{id}:
 *   get:
 *     summary: Отримати інформацію про конкретного водія
 *     tags: [Drivers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID водія
 *     responses:
 *       200:
 *         description: Дані про водія
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Driver'
 *       404:
 *         description: Водій не знайдений
 */
router.get("/drivers/:id", getDriverById);

/**
 * @swagger
 * /api/drivers:
 *   post:
 *     summary: Додати нового водія
 *     tags: [Drivers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Driver'
 *     responses:
 *       201:
 *         description: Водій успішно доданий
 *       400:
 *         description: Невірний запит
 */
router.post("/drivers", addDriver);

/**
 * @swagger
 * /api/drivers/{id}:
 *   put:
 *     summary: Оновити інформацію про водія
 *     tags: [Drivers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID водія
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Driver'
 *     responses:
 *       200:
 *         description: Інформація про водія оновлена
 *       404:
 *         description: Водій не знайдений
 */
router.put("/drivers/:id", updateDriver);

/**
 * @swagger
 * /api/drivers/{id}:
 *   delete:
 *     summary: Видалити водія
 *     tags: [Drivers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID водія
 *     responses:
 *       200:
 *         description: Водій успішно видалений
 *       404:
 *         description: Водій не знайдений
 */
router.delete("/drivers/:id", deleteDriver);

export default router;
