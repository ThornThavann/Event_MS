import mongoose from "mongoose";
const attendeeSchema = new mongoose.Schema(
  {
    username: { type: String, require: true, max: 200 },
    email: { type: String, require: true,   max: 100},
    password: { type: String, require: true, max: 20 },
  },
);

const User = module("user", attendeeSchema);
export default User;