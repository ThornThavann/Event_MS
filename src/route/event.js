import express from "express";
const eventrouter = express.Router();
import { createevent, getAllevent } from "../controllers/eventController.js" ;


eventrouter.post("/event/create ", createevent);
eventrouter.get("/event/all", getAllevent);



export default eventrouter;