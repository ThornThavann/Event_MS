// import express from "express";
// import mongoose from "mongoose";
// import VenueModel from ('./src/model/venue.js');

// mongoose.connect("mongodb+srv://sreymochlorn:8gBCT0ASiglh8q5F@cluster0.8puxb.mongodb.net/EMS?retryWrites=true&w=majority&appName=Cluster0");
// const app = express();

// app.use(express.json());

// app.get("/api/venue",(req, res) => {
//     res.send("Get venue");
// });
// app.put("/api/venue/:id" , (req, res) => {
//     res.send("Put venue");
// });
// app.post("/api/venue" , async (req,res) => {
//     res.send("Post venue");
//     const { name, password, email, role } = req.body;

//     if(!name || !password || !email || !role) {
//         res.status(400).json({ message: "All fields are required."});
//     }

//     const user = new VenueModel({
//         name,
//         password,
//         email,
//         role,
//     });
//     const result = await user.save();
//     console.log(result);
// });
// app.delete("/api/venue/:id",(req, res) => {
//     res.send("Delete venue");
// });
// app.listen(3001, () => {
//     console.log("Server is running on port 3001");
// })

