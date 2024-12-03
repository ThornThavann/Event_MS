import dotenv from  'dotenv';
import mongoose from 'mongoose';
import express from 'express';


const app = express ();
app.get ("/api/venue" , (req,res) => {
    res.send("Get Venue");
});
app.put("/api/venue", (req,res) =>{
    res.send("Put Venue");
});
app.delete("/api/venue", (req,res) =>{
    res.send("delete Venue");
});
app.post("/api/venue", (req,res) =>{
    res.send("post Venue");
});

mongoose.connect("mongodb://localhost:27017/js")
app.listen(3001, () =>{
    console.log ('sever runing')
});