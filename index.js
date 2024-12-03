import dotenv from "dotenv";
import express from "express";
import Mongoose from "mongoose";
import router from './src/route/organizerRouten.js'
import attendeerouter from "./src/route/attendeeRoute.js";


dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", router);
app.use("/api", attendeerouter);

Mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const PORT = process.env.POIRT || 3004;
app.listen(PORT, () => {
  console.log(`server is running on :${PORT}`);
});
