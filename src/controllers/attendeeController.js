import attendeeModel from "../model/attendee.js";

const createattendee = async (req, res) => {
  try {
    const { name, email, eventname } = req.body;
    console.log(req.body);

    if (!name || !email || !eventname) {
      return res.status(404).json({ message: "fields required" });
    }

    const newAttendee = new attendeeModel({
      name,
      email,
      eventname,
    });

    const savedAttende = await newAttendee.save();

    return res.status(201).json(savedAttende);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const getAllattendee = async (req, res) => {
  const attendee = await attendeeModel.find();
  try {
    return res.status(200).json(attendee);
  } catch (error) {
    return res.status(500).json({
      message: "error",
    });
  }
};
const updateAttendee = async (req, res) => {
  try {
    const attendeeId = req.params.id;
    const attendeeDate = req.body;

    const attendence = await attendeeModel.findByIdAndUpdate(
      attendeeId,
      attendeeDate,
      {new: true});
    if (!attendence)
      return res.status(404).json({ message: "attendee not found" });
    res.status(200).json(attendence);
  } catch (error) {
    console.log(error,"err");
    res.status(500).json("internal server not found");
  }
};
const deleteAttendence = async (req, res) => {
  try {
    const attendee = await attendeeModel.findByIdAndDelete(req.params.id);

      return res.status(200).json({ message: " delete successfully" , attendee});
  
  } catch (err) {
    console.log(err, "error");
    res.status(500).json("internal server not found");
  }
};
const getIdAttendence = async (req, res) => {
  try {
    const attendeeId =req.params.id;
    const attendee = await attendeeModel.findById(attendeeId);
    return res.status(200).json({ message: " delete successfully" , attendee});
  } catch (error) {
    console.log(error, "error");
    res.status(500).json("internal server not found");
  }
};


export default { createattendee, getAllattendee, updateAttendee, deleteAttendence,  getIdAttendence};
