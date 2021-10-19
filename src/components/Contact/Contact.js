import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div >
            <Container>
                <div className="text-center " style={{ marginTop: "100px" }} >
                    <h1>CONTACT WITH US</h1>
                    <h4>HOTLINE: 096102441....
                    </h4>
                    <h4>Email: infovisioneyebd@gmail.com</h4>
                    <h4>info@visioneyebd.org</h4>
                </div>
                <div>
                    <Row className="mt-5">
                        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg" style={{
                            backgroundColor: '#f8fafc', boxShadow: "30px", borderRadius: "20px",
                        }}>
                            <Form >
                                <div className="d-flex" >
                                    <Form.Group controlId="formBasicEmail" style={{ marginRight: "10px" }}>
                                        <Form.Label >Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="Name" placeholder="Name" />
                                    </Form.Group>
                                </div>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Example textarea</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                <Button variant="success btn-block" type="submit" className="mt-2 ">
                                    Submit
                                </Button>

                            </Form>

                        </Col>
                    </Row>
                </div>

            </Container>

        </div>
    );
};

export default Contact;