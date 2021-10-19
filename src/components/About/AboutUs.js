import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <Container>
                <Row sm={4} lg={1}>
                    <Col>

                        <div className="blog-header">
                            <div className="mt-5">
                                <p>Hospitalmanagement.net houses a unique portfolio of services that keep healthcare professionals abreast of the latest and most significant developments within their clinical, surgical or management area.
                                </p>
                                <p> Covering all aspects of the hospital environment, hospitalmanagement.net provides both clinical and senior administrative staff with instant access to a comprehensive reference source introducing technologies, services and procedures our audience can employ to improve the management of their facilities.</p>

                            </div>


                        </div>

                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default AboutUs;