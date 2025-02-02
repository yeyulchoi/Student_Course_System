import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import courses from './data/courses.js'    // since using ES module on the backend, have to use .js

const port=process.env.PORT ||5000;
const app=express();


app.get('/',(req, res) =>{
    res.send("API is running...")
})

app.get('/api/courses', (req, res) => {
    console.log(courses)
    res.json(courses);
});

//retrieve single product

app.get('/api/courses/:id',(req, res)=>{
    const course =courses.find((course)=>course._id === req.params.id)
    res.json(course);
})



app.listen(port, ()=>console.log(`Server is running on ${port}`));