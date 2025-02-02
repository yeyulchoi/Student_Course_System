 // eslint-disable-next-line
import React from 'react';

import {Navbar, Nav, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

import {FaShoppingCart} from 'react-icons/fa';
import centennial from '../assets/centennial.png'



const Header = () => {
    // const navigate = useNavigate();
    // const handleSignIn = () => {
    //     navigate('/login');  // Navigate to the login page manually
    // };
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>
                    <img src={centennial} alt="Centennial" /> 
                        Student&Course System
                    </Navbar.Brand>
                </LinkContainer>                   
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/course">
                            <Nav.Link><FaShoppingCart/>Course</Nav.Link>                           
                        </LinkContainer>
                        <LinkContainer to="/login">                           
                            <Nav.Link  ><FaShoppingCart/>Sign In</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header