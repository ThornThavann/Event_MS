import dotenv from "dotenv";
import express from "express";
import Mongoose from "mongoose";
import router from "./src/route/organizerRouten.js";
import venuerouter from "./src/route/venueRoute.js"


import router from './src/route/organizerRouten.js'
import attendencerouter from './src/route/attendeeRoute.js'

import organizerRouter from "./src/route/organizerRouten.js";
import sponsorRouter from "./src/route/sposorModel.js";


dotenv.config();

const app = express();

app.use(express.json());


app.use("/api", router);

app.use("/api", venuerouter);

app.use("/api", attendencerouter);

app.use("/api", organizerRouter);


app.use("/api/sponsor", sponsorRouter);


Mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const PORT = process.env.POIRT || 3004;
app.listen(PORT, () => {
  console.log(`server is running on :${PORT}`);
});
