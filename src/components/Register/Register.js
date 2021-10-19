import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Header from '../shared/Header/Header';

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpssword] = useState("")
    const { registerNewUser, setUserName } = useAuth()
    let history = useHistory()
    let location = useLocation();
    const Redirect_url = location.state?.from || '/home'


    const handelName = (e) => {
        setName(e.target.value)
    }
    const handelEmail = (e) => {
        setEmail(e.target.value)
    }
    const handelPassword = (e) => {
        setpssword(e.target.value)
    }

    // user name set 
    const nameSet = () => {
        setUserName(name)
    }
    const handelRegister = (e) => {
        e.preventDefault()
        registerNewUser(email, password)
            .then((result) => {
                nameSet()
                history.push(Redirect_url)
            })
    }
    return (
        <div >
            <Container >
                <Row className="mt-5" >
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg" style={{
                        backgroundColor: '#f8fafc', boxShadow: "30px", borderRadius: "20px",
                    }}>
                        <h1 className="text-center pb-2" style={{ color: "black" }}>Please Register</h1>

                        <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Label >Name</Form.Label>
                                <Form.Control onBlur={handelName} type="Name" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label >Email address</Form.Label>
                                <Form.Control onBlur={handelEmail} type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={handelPassword} type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="success btn-block " type="submit" onClick={handelRegister} className="mt-2 ">
                                Register
                            </Button>
                            <p>Already Have Account <Link to='/login' style={{ marginLeft: "80px", textDecoration: "none" }}>Log In </Link></p>
                        </Form>
                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2021 Mamun</h6>
            </Container>

        </div>
    );
};

export default Register;