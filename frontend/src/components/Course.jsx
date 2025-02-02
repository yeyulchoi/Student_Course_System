import React from 'react'
import {Card} from "react-bootstrap"
import { Link } from 'react-router-dom'

const Course = ({course}) => {
  return (
   <Card className="my-3 p-3 rounded">
    <Link to={`/course/${course._id}`}>
      <Card.Img src={course.image} variant="top"/>
    </Link>
    
    <Card.Body>
      <Link to={`/course/${course._id}`}>           
        <Card.Title as="div">
          <strong>{course.name}</strong>
        </Card.Title>
      </Link>
      
      <Card.Text as="h3">
        ${course.code}
      </Card.Text>
    </Card.Body>
   </Card>
  )
}

export default Course

///
 //, template literals allow you to embed expressions within a string. They are enclosed by backticks (`) and use ${expression} to interpolate values.

///