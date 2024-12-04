import express from "express";
const attendencerouter = express.Router();
import attendence from "../controllers/attendeeController.js";
const {createattendence,getAllattendence, deleteAttendence,updateAttendance, getIdAttendence }= attendence;

attendencerouter.post("/attendance/create", createattendence);
attendencerouter.get("/attendance/all", getAllattendence);
attendencerouter.put("/attendance/:id", updateAttendance);
attendencerouter.delete("/attendance/:id", deleteAttendence);
attendencerouter.get("/attendance/:id", getIdAttendence);




export default attendencerouter;
