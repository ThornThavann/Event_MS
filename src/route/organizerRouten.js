import express from "express";
const router = express.Router();

import {
  createOrganizer,
  getAllOrganizer,
  getIdOrganizer,
  updateOrganizer,
  deleteOrganizer,
} from "../controllers/organizerController.js";

router.post("/organizer/create", createOrganizer);
router.get("/organizer/all", getAllOrganizer);
router.get("/organizer/:id", getIdOrganizer);
router.put("/organizer/:id", updateOrganizer);
router.delete("/organizer/:id", deleteOrganizer);

export default router;
