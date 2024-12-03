import mongoose from "mongoose";
const attendeeSchema = new mongoose.Schema(
  {
    username: { type: String, require: true },
    email: { type: String, require: true},
    password: { type: String, require: true},
  },
);

const User = module("user", attendeeSchema);
export default User;