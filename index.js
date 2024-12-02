import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
app.use(express.json());
connectDB();

const PORT = process.env.POIRT || 3000
app.listen(PORT, () =>{
    console.log(`server is running on :${PORT}`)
})







