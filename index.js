import dotenv from "dotenv";
import express from "express";
import Mongoose from "mongoose";
import router from "./src/Routen/organizerRouten.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", router);

Mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

app.listen(3000, () => {
  // console.log(process.env.DATABASE_URL);
  console.log("server started on port 3000");
});
