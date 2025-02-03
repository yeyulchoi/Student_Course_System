
import mongoose from "mongoose";



const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
   
    student_number:{
        type:String,
        required: true,
    },
    program:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    phone:{
        type:String,
        required: true,
    },
    isAdmin:{
        type:Boolean,
        required: true,
        default:false,
    },
    address:{
        type:String,
        required: true,
    }, 
    password:{
        type:String,
        required: true,
    },
    favorite_programming_lang:{
        type:String,
        required: true,
       
    },
    favorite_framework:{
        type:String,
        required: true,
    },
   

},{timestamps:true})
const Student = mongoose.model("Student",studentSchema )
export default Student;
