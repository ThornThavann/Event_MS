import express from "express";
import {
  createSponsor,
  getAllSponsor,
  getByIdSponsor,
  updateSponsor,
  deleteSponsor,
} from "../controllers/sponsorController.js";
const router = express.Router();

router.post("/sponsor/create", createSponsor);
router.get("/sponsor/all", getAllSponsor);
router.get("/sponsor/:id", getByIdSponsor);
router.put("/sponsor/:id", updateSponsor);
router.delete("/sponsor/:id", deleteSponsor);

export default router;
