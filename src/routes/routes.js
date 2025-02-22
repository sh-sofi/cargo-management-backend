import express from "express";
import {
  getAllRoutes,
  getRouteById,
  addRoute,
  updateRoute,
  deleteRoute,
} from "../controllers/routeController.js";

const router = express.Router();

router.get("/routes", getAllRoutes);
router.get("/routes/:id", getRouteById);
router.post("/routes", addRoute);
router.put("/routes/:id", updateRoute);
router.delete("/routes/:id", deleteRoute);

export default router;
