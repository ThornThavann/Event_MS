import mongoose from "mongoose";

const attendeeSchema = new mongoose.Schema(
  {
    name: { type: String, require:true},
    email: { type: String, require:true},
    eventname: { type: String, require:true},
    create_by:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    update_by:{type:mongoose.Schema.Types.ObjectId,ref:"user"},

  },
  {
    timestamps:true,
  }
);

const attendeeModel = mongoose.model("attendee", attendeeSchema);
export default attendeeModel;
// console.log(attendeeSchema);