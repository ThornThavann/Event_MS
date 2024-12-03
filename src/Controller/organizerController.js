import OrganizerModel from "../Model/Organizer.js";

export const createOrganizer = async (req, res) => {
  try {
    const { fullName, dob, department, phoneNumber, email } = req.body;
    console.log(req.body);

    if (!fullName || !dob || !department || !phoneNumber || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newOrganizer = new OrganizerModel({
      fullName,
      dob,
      department,
      phoneNumber,
      email,
    });
    const savedOrganizer = await newOrganizer.save();

    return res.status(201).json(savedOrganizer);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllOrganizer = async (req, res) => {
  try {
    const organizers = await OrganizerModel.find();
    return res.status(200).json(organizers);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error" });
  }
};

export const getIdOrganizer = async (req, res) => {
  try {
    const organizers = await OrganizerModel.findById(req.params.id);
    if (!organizers)
      return res.status(404).json({ message: "Organizer not found" });
    res.status(200).json(organizers);
  } catch (error) {
    console.log(error, "error internal");
    res.status(500).json("internal server not found");
  }
};

export const updateOrganizer = async (req, res) => {
  try {
    const organizers = await OrganizerModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!organizers)
      return res.status(404).json({ message: "organizer not found" });
    res.status(200).json(organizers);
  } catch (err) {
    console.log(err, "error");
    res.status(500).json("internal server not found");
  }
};

export const deleteOrganizer = async (req, res) => {
  try {
    const organizers = await OrganizerModel.findByIdAndDelete(req.params.id);
    if (!organizers)
      return res.status(404).json({ message: "organizer not found" });
    res.status(200).json(organizers);
  } catch (err) {
    console.log(err, "error");
    res.status(500).json("internal server not found");
  }
};
