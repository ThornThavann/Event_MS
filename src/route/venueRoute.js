import express from "express";
const venueRouter = express.Router();
import {createVenue,getIdVenue, getAllVenue, updateVenue, deleteVenue }from '../controllers/venueController.js';

venueRouter.post("/venue/create", createVenue);
venueRouter.get("/venue/all", getAllVenue);
venueRouter.get("/venue/:id", getIdVenue);
venueRouter.put("/venue/:id", updateVenue);
venueRouter.delete("/venue/:id", deleteVenue);

export default venueRouter;
