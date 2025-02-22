import express from "express";
import {
  getAllCompletedWorks,
  getCompletedWorkById,
  addCompletedWork,
  updateCompletedWork,
  deleteCompletedWork,
} from "../controllers/workController.js";

const router = express.Router();

router.get("/completedWorks", getAllCompletedWorks);
router.get("/completedWorks/:id", getCompletedWorkById);
router.post("/completedWorks", addCompletedWork);
router.put("/completedWorks/:id", updateCompletedWork);
router.delete("/completedWorks/:id", deleteCompletedWork);

export default router;
