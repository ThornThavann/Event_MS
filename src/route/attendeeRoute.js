import express from "express";
const attendencerouter = express.Router();
import attendence from "../controllers/attendeeController.js";
const {createattendence,getAllattendence, deleteAttendence,updateAttendance, getIdAttendence }= attendence;

attendencerouter.post("/create", createattendence);
attendencerouter.get("/attendence", getAllattendence);
attendencerouter.put("/update/:id", updateAttendance);
attendencerouter.delete("/delete/:id", deleteAttendence);
attendencerouter.get("/attendence/:id", getIdAttendence);




export default attendencerouter;
