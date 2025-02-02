import { Row, Col} from 'react-bootstrap';
import courses from '../courses';
import Course from '../components/Course';


import React from 'react'

const HomeScreen = () => {
  return (
   <>
   <h1>Latest courses</h1>
   <Row>
    {courses.map((course)=>(
        <Col key={course.code} sm={12} md={6} lg={4} xl={3}>        
        <Course course={course}/>
        </Col>
    ))    
    }
    </Row>
    </>
  )
}

export default HomeScreen