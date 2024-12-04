import mongoose from "mongoose";

const { Schema, model } = mongoose;

const sponsorModelSchema = new Schema(
  {
    name: {
      type: String,
    },
    contribution: {
      type: String,
    },
    eventId: {
      type: String,
    },
    CreateBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    UpdateBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const sponsorModel = model("Sponsor", sponsorModelSchema);

export default sponsorModel;
