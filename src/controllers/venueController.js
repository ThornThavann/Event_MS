import Venue from "../model/venue.js";

export const createVenue = async (req, res) => {
    try {
        const { name, location, capacity } = req.body;
        console.log(req.body);

        if (!name || !location || !capacity) {
            return res.status(400).json({ message: "All fields are requrired" });
        }

        const newVenue = new Venue({
            name,
            location,
            capacity,
        });
        const saveVenue = await newVenue.save();

        return res.status(201).json(saveVenue);
    }   catch (error) {
        console.log(error);
        return res.status(500),json({ mressage: "Internal server error" });
    }
};

export const getAllVenue = async (req, res) => {
    try {
        const venue = await Venue.find();
        return res.status(200).json(venue);
    }catch (error) {
        console.log(error);
        return res.status(500).json({ message: "error" });
    }
};

export const getIdVenue = async (req, res) => {
    try {
        const venue = await Venue.findById(req.params.id);
        if(!venue)
            return res.status(404).json({ message: "Venue not found"});
        res.status(200).json(venue);
    }   catch (error) {
        console.log(error, "error internal");
        res.status(500).json({ message :"Internal server not found" });
    }
};

export const updateVenue = async (req, res) => {
    try {
        const venue = await Venue.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!venue)
            return res.status(404).json({ message: "venue not found" });
        res.status(200).json(venue);
    } catch (error) {
        console.log(error, "error");
        res.status(500).json({ message: "Internal server not found"});
    }
};

export const deleteVenue = async (req, res) => {
    try {
        const venue = await Venue.findByIdAndDelete(req.params.id);
        if(!venue)
            return res.status(400).json({ message: "venue not found"});
        res.status(200).json(venue);
    } catch (error) {
        console.log(error, "error");
        res.status(500).json({ message: "Internal server not found" });
    }
};