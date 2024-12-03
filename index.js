import dotenv from "dotenv";
import express from "express";
import Mongoose from "mongoose";
import organizerRouter from "./src/route/organizerRouten.js";
import sponsorRouter from "./src/route/sposorModel.js";
import autRouter from "./src/route/authRouter.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", organizerRouter);

//sponsor
app.use("/api/sponsor", sponsorRouter);

// user
app.use("/api/user", autRouter);

Mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const PORT = process.env.POIRT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on :${PORT}`);
});
