
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

import './Login.css'



const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    let history = useHistory()
    let location = useLocation();
    const { singnInWithGoogle, setuser, handelsingIn, setIsloading, signInWithFacebook } = useAuth()
    const Redirect_url = location.state?.from || '/home';

    // google sign in 
    const googleSignIn = () => {
        singnInWithGoogle()
            .then(result => {
                setuser(result.user)
                history.push(Redirect_url)
            })
            .finally(() => setIsloading(false))
    }
    // facebook sign in 
    const facebookSignIn = () => {
        signInWithFacebook()
            .then((result) => {
                setuser(result.user);
                history.push(Redirect_url)
            })
            .finally(() => setIsloading(false))
    }


    // get all input value 
    const loginEmail = (e) => {
        setEmail(e.target.value)
    }
    const loginPassword = (e) => {
        setPassword(e.target.value)
    }

    const handelLogin = (e) => {
        e.preventDefault()
        handelsingIn(email, password)
            .then((result) => {
                history.push(Redirect_url)
            })
            .catch((error) => {
                setError("Password does't match")
            });
    }

    return (
        <div>
            <Container>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg" style={{
                        backgroundColor: '#f8fafc', boxShadow: "30px", borderRadius: "20px",
                    }}>
                        <h1 className="text-center pb-2" style={{ color: "black" }}>Sign in with</h1>
                        <div className="signinwith-other" >
                            <button onClick={facebookSignIn} className="facebook">Facebook</button>

                            <button onClick={googleSignIn}>Google</button>
                        </div>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label >Email address</Form.Label>
                                <Form.Control onBlur={loginEmail} type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={loginPassword} type="password" placeholder="Password" />
                            </Form.Group>
                            <h6 style={{ color: "red" }}>{error}</h6>

                            <div className="d-flex">
                                <Button variant="success btn-block" type="submit" onClick={handelLogin} className="mt-2 ">
                                    Login
                                </Button>
                                <p className="mx-3 mt-3">New In Website? <Link to='/register' style={{ marginLeft: "0px", textDecoration: "none" }}>Create Account</Link></p>
                            </div>
                        </Form>

                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2021 Mamun</h6>
            </Container>
        </div>
    );
};

export default Login;