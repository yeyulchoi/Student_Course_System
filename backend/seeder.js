import mongoose from "mongoose";
import dotenv from 'dotenv';
import colors from 'colors';
import students from './data/students.js'
import courses from './data/courses.js'
import Student from "./models/studentModel.js"
import Course from './models/courseModel.js'
import Registration from './models/registerModel.js'
import connectDB from './config/db.js'


dotenv.config();

connectDB();


const importData = async()=>{
    try {
        await Registration.deleteMany();  //previous info saved will be deleted
        await Course.deleteMany();
        await Student.deleteMany();

        const createStudents=await Student.insertMany(students);
        const adminUser = createStudents[0]._id;
        
        const sampleCourses = courses.map((course)=>{
            return {...course, user:adminUser}
        });

        await Course.insertMany(sampleCourses)
        console.log('Data Imported'.green.inverse)  // color pkg comes in
        process.exit()

    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
       
    }
}
const destroyData = async()=>{
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log('Data destroyed'.red.inverse);
        process.exit()

    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

if (process.argv[2]==='-d'){
    destroyData();
}else{
    importData();
}
