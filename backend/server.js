import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js'
import courseRoutes from './routes/courseRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

const port=process.env.PORT ||5000;
const app=express();

connectDB();
app.use(express.json());
app.get('/',(req, res) =>{
    res.send("API is running...")
})

app.use('/api/courses',courseRoutes);
app.use(notFound);

app.use(errorHandler)





app.listen(port, ()=>console.log(`Server is running on ${port}`));