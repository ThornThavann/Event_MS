import express from "express";
const attendeerouter = express.Router();
import attendence from "../controllers/attendeeController.js";
const {createattendee,getAllattendee, deleteAttendence,updateAttendee, getIdAttendence }= attendence;

attendeerouter.post("/create", createattendee);
attendeerouter.get("/attendence", getAllattendee);
attendeerouter.put("/update/:id", updateAttendee);
attendeerouter.delete("/delete/:id", deleteAttendence);
attendeerouter.get("/attendence/:id", getIdAttendence);




export default attendeerouter;
