import React from 'react'
import {useEffect, useState} from 'react';
import axios from 'axios';
import { Row, Col, Form} from 'react-bootstrap';
import Course from '../components/Course';


const HomeScreen = () => {
  const [courses, setCourses] = useState([]);
  useEffect(()=>{
    const fetchCourses = async()=>{
      try {
        const { data } = await axios.get('/api/courses');
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }}
    fetchCourses();

  },[]);  
  //[] is an array of dependencies / put sth in there, the value changes, this use effect is gonna to run okay but we only  want it to run once when the page loads.
  // so  we gonna leave this as an empty array
//use effect: I wanna use async await

  return (
   <>
   <h1>Latest courses</h1>
   <Row>
    {courses.map((course)=>(
        <Col key={course._id} sm={12} md={6} lg={4} xl={3}>        
        <Course course={course}/>
        </Col>
    ))    
    }
    </Row>
    </>
  )
}

export default HomeScreen