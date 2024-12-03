import attendenceModel from "../model/attendee.js";

const createattendence = async (req, res) => {
  try {
    const { name, email, eventname } = req.body;
    console.log(req.body);

    if (!name || !email || !eventname) {
      return res.status(404).json({ message: "fields required" });
    }

    const newAttendence = new attendenceModel({
      name,
      email,
      eventname,
    });

    const savedAttendence = await newAttendence.save();

    return res.status(201).json(savedAttendence);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const getAllattendence = async (req, res) => {
  const attendence = await attendenceModel.find();
  try {
    return res.status(200).json(attendence);
  } catch (error) {
    return res.status(500).json({
      message: "error",
    });
  }
};
const updateAttendance = async (req, res) => {
  try {
    const attendenceId = req.params.id;
    const attendenceDate = req.body;

    const attendence = await attendenceModel.findByIdAndUpdate(
      attendenceId,
      attendenceDate,
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
    const attendence = await attendenceModel.findByIdAndDelete(req.params.id);

      return res.status(200).json({ message: " delete successfully" , attendence});
  
  } catch (err) {
    console.log(err, "error");
    res.status(500).json("internal server not found");
  }
};
const getIdAttendence = async (req, res) => {
  try {
    const attendenceId =req.params.id;
    const attendee = await attendenceModel.findById(attendenceId);
    return res.status(200).json({ message: " delete successfully" , attendee});
  } catch (error) {
    console.log(error, "error");
    res.status(500).json("internal server not found");
  }
};


export default { createattendence, getAllattendence, updateAttendance, deleteAttendence,  getIdAttendence};
