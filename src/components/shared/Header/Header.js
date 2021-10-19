import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';




const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar bg="light" expand={false}>
                <Container >
                    <Navbar.Brand href="#">VISSION EYE HOSPITAL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Link style={{ textDecoration: 'none', marginBottom: "10px" }} to="/home" >Home</Link>
                                <Link style={{ textDecoration: 'none', marginBottom: "10px" }} to="/services">SERVICES</Link>
                                <Link style={{ textDecoration: 'none', marginBottom: "10px" }} to="/doctor" >FIND AN EYE DORCTOR</Link>
                                <Link style={{ textDecoration: 'none', marginBottom: "10px" }} to="/patientcare">PATIENT CARE</Link>
                                <Link style={{ textDecoration: 'none', marginBottom: "10px" }} to="/healthtips" >HEALTH TIPS</Link>
                                <Link style={{ textDecoration: 'none', marginBottom: "10px" }} to="/aboutus">ABOUT US</Link>
                                <Link style={{ textDecoration: 'none', marginBottom: "10px" }} to="/contact">CONATACT </Link>
                                {
                                    user.email ? <div>

                                        <h4>{user?.displayName}</h4>
                                        <Button onClick={logOut} style={{ marginTop: "15px" }}>Log Out</Button></div> : <div>
                                        <Link style={{ textDecoration: 'none', marginRight: "15px" }} to="/login">Sign In</Link>
                                        <Link style={{ textDecoration: 'none' }} to="/register">Sign up</Link>

                                    </div>

                                }

                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            {/* <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/home" >
                        <NavLink
                            to="/home"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "white",
                                textDecoration: "none",
                                marginRight: "15px"
                            }}
                        >
                            HOME
                        </NavLink>



                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end ">

                        <NavLink exact to="/services" style={{
                            fontWeight: "bold",
                            color: "white",
                            textDecoration: "none",
                            marginRight: "15px"
                        }}>
                            SERVICE
                        </NavLink>
                        <NavLink exact to="/service" style={{
                            fontWeight: "bold",
                            color: "white",
                            textDecoration: "none",
                            marginRight: "15px"
                        }}>
                            FIND AN EYE DOCTOR
                        </NavLink>
                        <NavLink exact to="/service" style={{
                            fontWeight: "bold",
                            color: "white",
                            textDecoration: "none",
                            marginRight: "15px"
                        }}>
                            PATIENT CARE
                        </NavLink>
                        <NavLink exact to="/service" style={{
                            fontWeight: "bold",
                            color: "white",
                            textDecoration: "none",
                            marginRight: "15px"
                        }}>
                            HEALTH INFO
                        </NavLink>
                        <NavLink exact to="/service" style={{
                            fontWeight: "bold",
                            color: "white",
                            textDecoration: "none",
                            marginRight: "15px"
                        }}>
                            ABOUT US
                        </NavLink>
                        <NavLink exact to="/service" style={{
                            fontWeight: "bold",
                            color: "white",
                            textDecoration: "none",
                            marginRight: "15px"
                        }}>
                            CONTACT
                        </NavLink>

                        

                    </Navbar.Collapse>

                </Container>
            </Navbar> */}
        </div >
    );
};

export default Header;