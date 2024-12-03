import dotenv from "dotenv";
import express from "express";
import Mongoose from "mongoose";
import router from "./src/route/organizerRouten.js";
import venuerouter from "./src/route/venueRoute.js"

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", router);
app.use("/api", venuerouter);

Mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const PORT = process.env.POIRT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on :${PORT}`);
});
