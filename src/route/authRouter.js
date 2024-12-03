import express from "express";
import {
  register,
  loginUser,
  getAllUser,
  getByIdUser,
  updateByIdUser,
  deleteByIdUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", loginUser);
router.get("/all", getAllUser);
router.get("/all/:id", getByIdUser);
router.put("/all/update/:id", updateByIdUser);
router.delete("/all/delete/:id", deleteByIdUser);

export default router;
