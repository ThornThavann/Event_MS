import mongoose from "mongoose";

const eventModelSchema = new mongoose.Schema(
  {
    name: { type: String },
    date: { type: String },
    discription: { type: String },
    venueld: { type: String },
    organizerid: { type: Number },
    //   createBy: {type:mongoose.Schema.Types.ObjectId,ref:},
    //   updateBy: {type:mongoose.Schema.Types.ObjectId,ref:}
  },
  {
    timestamps: true,
  }
);
const event = mongoose.model("event", eventModelSchema);
export default event;
