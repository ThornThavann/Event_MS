import express from "express";
import {
  createSponsor,
  getAllSponsor,
  getByIdSponsor,
  updateSponsor,
  deleteSponsor,
} from "../controllers/sponsorController.js";
const router = express.Router();

router.post("/new", createSponsor);
router.get("/all", getAllSponsor);
router.get("/all/:id", getByIdSponsor);
router.put("/update/:id", updateSponsor);
router.delete("/delete/:id", deleteSponsor);

export default router;
