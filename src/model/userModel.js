import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userModelSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "User",
    },
  },
  {
    timestamps: true,
  }
);

const userModel = model("User", userModelSchema);

export default userModel;
