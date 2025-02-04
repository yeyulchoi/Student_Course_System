import {useState, useEffect, } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'
import {Form,Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'



const CourseScreen = () => {
    const [course, setCourse] =useState({});


    // destructure , :courseCode is rename 
    const {id:courseId} =useParams();   
      
    useEffect(()=>{
        const fetchCourse = async()=>{
            const {data} = await axios.get(`/api/courses/${courseId}`)
            setCourse(data);
        }
        fetchCourse();
    },[courseId])
   

  return (
   <>
   <Link to="/" className="btn btn-light my-3">GO BACK</Link>
   <Row>
        <Col md={5}>
        <Image src={course.image} alt={course.name} fluid/>
        </Col>
        <Col md={7}>
            <ListGroup variant='flush'>
            <ListGroup.Item>
                <h6>Course Name</h6>
                <h3>{course.course_name}</h3>
            </ListGroup.Item> 
            <ListGroup.Item>
                <h6>Course code</h6>
                <h3>{course.course_code}</h3>
            </ListGroup.Item>                
            <ListGroup.Item>
                <h6>Section</h6>
                <h3>{course.section}</h3>
            </ListGroup.Item> 
            <ListGroup.Item>
                <h6>Semester</h6>
                <h3>{course.semester}</h3>
            </ListGroup.Item> 
            <ListGroup.Item>
                <h6>Description</h6>
                <h3>{course.description}</h3>
            </ListGroup.Item> 
            </ListGroup>
        </Col>
        <Col md={3}>
        </Col>
   </Row>
   
   
   
   
   
   </>
  )
}

export default CourseScreen