import express from "express";
const router = express.Router();
import {
  createOrganizer,
  getAllOrganizer,
  getIdOrganizer,
  updateOrganizer,
  deleteOrganizer,
} from "../Controller/organizerController.js";

router.post("/new", createOrganizer);
router.get("/all", getAllOrganizer);
router.get("/all/:id", getIdOrganizer);
router.put("/all/:id", updateOrganizer);
router.delete("/all/:id", deleteOrganizer);

export default router;
