import React from 'react'
import { useParams } from 'react-router-dom'
import courses from '../courses'
import { Link } from 'react-router-dom'
import {Form,Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'



const CourseScreen = () => {
    // destructure , :courseCode is rename 
    const {id:courseId} =useParams();   
        //fetch course
    const course = courses.find((course)=>course._id===courseId)
   

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
                <h3>{course.name}</h3>
            </ListGroup.Item> 
            <ListGroup.Item>
                <h3>{course.code}</h3>
            </ListGroup.Item> 
            <ListGroup.Item>
                <h3>{course.section}</h3>
            </ListGroup.Item> 
            <ListGroup.Item>
                <h3>{course.semester}</h3>
            </ListGroup.Item> 
            <ListGroup.Item>
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