import dotenv from 'dotenv';
import Express from 'express';
import Mongoose from 'mongoose';

dotenv.config();

const app = Express();

Mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

app.listen(3000, () => {
    // console.log(process.env.DATABASE_URL);
    console.log('server started on port 3000');
});