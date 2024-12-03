import mongoose from "mongoose";

const { Schema, model } = mongoose;

const OrganizerModelSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
  },
  department: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const OrganizerModel = model("Organizer", OrganizerModelSchema);

export default OrganizerModel;
