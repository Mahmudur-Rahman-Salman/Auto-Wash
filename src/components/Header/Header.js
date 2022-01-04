import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='fs-3 fw-bold'><span className='brand-color'>Auto</span> Wash</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/home" className="link">Home</NavLink>
                            <NavLink to="/about" className="link">About</NavLink>
                            <NavLink to="/service" className="link">Service</NavLink>
                            <NavLink to="/price" className="link">Price</NavLink>
                            <NavLink to="/washingpoints" className="link">Washing Points</NavLink>

                        </Nav>
                        <Nav>
                            <Button className='btn-circle' variant="outline-light" size="lg" data-aos="zoom-in"data-aos-duration="1000">Get Appointment</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;