import eventModel from "../model/event.js";

export const createevent = async (req, res) => {
  console.log("------------")
  try {
    const { name, date, discription, venueld, organizerid } = req.body;
    console.log(req.body);

    if (!name || !date || !discription || !venueld || !organizerid) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEvent = new eventModel({
      name,
      date,
      discription,
      venueld,
      organizerid,
    });
    const savedEvent = await newEvent.save();

    return res.status(201).json(savedEvent);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export const getAllevent = async (req, res) => {
  // res.send("test get all events...");
  try {
      const event = await eventModel.find();
      return res.status(200).json(event);
  }catch (error) {
      console.log(error);
      return res.status(500).json({ message: "error" });
  }
};
