import express from "express";
const eventrouter = express.Router();
import { createevent, getAllevent } from "../controllers/eventController.js" ;


eventrouter.post("/create", createevent);
eventrouter.get("/events", getAllevent);



export default eventrouter;