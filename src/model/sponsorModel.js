import mongoose from "mongoose";

const { Schema, model } = mongoose;

const sponsorModelSchema = new Schema({
  name: {
    type: String,
  },
  contribution: {
    type: String,
  },
  eventId: {
    type: String,
  },
});

const sponsorModel = model("Sponsor", sponsorModelSchema);

export default sponsorModel;
