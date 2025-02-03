import mongoose from "mongoose";


const courseSchema = new mongoose.Schema({
    students:[{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"Student"
    }],
    course_code:{
        type:String,
        required: true,
    },
    course_name:{
        type:String,
        required: true,
    },
    image:{
        type:String,
        required: true,
    },   
    section:{
        type:String,
        required: true,
    },
    semester:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    

},{timestamps:true})


const Course = mongoose.model("Course",courseSchema )
export default Course;

