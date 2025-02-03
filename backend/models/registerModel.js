
import mongoose from "mongoose";



const registerSchema = new mongoose.Schema({
    student:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"Student"
    },
    registerCourse:[
        {
            name:{type:String, required:true},
            qty:{type:String, required:true},
            image:{type:String, required:true},
            course:{
                type: mongoose.Schema.Types.ObjectId,
                requried:true,
                ref:"Course",
            }
        }
    ]
   

},{timestamps:true})
const Registration = mongoose.model("registration",registerSchema )
export default Registration;
