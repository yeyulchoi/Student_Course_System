
import asyncHandler from "../middleware/asyncHandler.js"
import Course from '../models/courseModel.js';
import {notFound, errorHandler} from '../middleware/errorMiddleware.js'


//@desc fetch all courses
//@route GET /api/courses
//@access public is public  
const getCourses = asyncHandler(async (req,res)=>{
    const courses =await Course.find({});
    res.json(courses);

})

//@desc fetch a course
//@route GET /api/courses/:id
//@access private  
const getCourseById = asyncHandler(async (req, res)=>{
    const course = await Course.findById(req.params.id);
    if(course){
        return res.json(course);  // reason of using return :  to prevent further execution of the function once the response has been sent.
    }
    res.status(404).json({ message: "Resource not found" });
       
})


export {getCourses, getCourseById};
