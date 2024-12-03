import mongoose from "mongoose";

const attendeeSchema = new mongoose.Schema(
  {
    name: { type: String, require:true,  max: 200},
    email: { type: String, require:true,  max: 100},
    eventname: { type: String, require:true, max: 200},
    create_by:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    update_by:{type:mongoose.Schema.Types.ObjectId,ref:"user"},

  },
  {
    timestamps:true,
  }
);

const attendeeModel = mongoose.module("attendee", attendeeSchema);
export default attendeeModel;
console.log(attendeeSchema);