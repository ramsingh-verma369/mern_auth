import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from './db/db.connect.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api/auth',authRoutes);


app.listen(PORT,() =>{
    connectDB();
    console.log("Server is running on the port 3000");
});