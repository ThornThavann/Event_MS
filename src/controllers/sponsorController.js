import sponsorModel from "../model/sponsorModel.js";

export const createSponsor = async (req, res) => {
  try {
    const { name, contribution, eventId } = req.body;
    if (!name || !contribution || !eventId) {
      return res.status(400).json({ message: "All filed are required" });
    }
    const newSponsor = new sponsorModel({
      name,
      contribution,
      eventId,
    });
    const savedSponsor = await newSponsor.save();
    return res.status(201).json(savedSponsor);
  } catch (err) {
    console.log(err, "error");
    res.status(500).json({ message: "interal server not found" });
  }
};

export const getAllSponsor = async (req, res) => {
  try {
    const sponsors = await sponsorModel.find();
    return res.status(200).json(sponsors);
  } catch (err) {
    console.log(err, "error");
    res.status(500).json({ message: "interal server not found." });
  }
};

export const getByIdSponsor = async (req, res) => {
  try {
    const sponsors = await sponsorModel.findById(req.params.id);
    if (!sponsors)
      return res.status(404).json({ message: "Sponsor not found" });
    res.status(200).json(sponsors);
  } catch (err) {
    console.log(err, "error");
    res.status(500).json({ message: "interal server not found." });
  }
};

export const updateSponsor = async (req, res) => {
  try {
    const sponsors = await sponsorModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!sponsors)
      return res.status(404).json({ message: "Sponsor not found." });
    res.status(200).json(sponsors);
  } catch (err) {
    console.log(err, "error");
    res.status(500).json({ message: "interal server not found." });
  }
};

export const deleteSponsor = async (req, res) => {
  try {
    const sponsors = await sponsorModel.findByIdAndDelete(req.params.id);
    if (!sponsors)
      return res.status(404).json({ message: "Sponsor not found." });
    res.status(200).json(sponsors);
  } catch (err) {
    console.log(err, "error");
    res.status(500).json({ message: "interal server not found." });
  }
};
