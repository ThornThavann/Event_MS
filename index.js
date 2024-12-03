import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import organizerRouter from "./src/route/organizerRouten.js";
import eventrouter from './src/route/event.js'

dotenv.config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });


const app = express();

app.use(express.json());

app.use("/api", organizerRouter);
app.use("/api", eventrouter);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on :${PORT}`);
});
