import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <Container >
                <Row xs={4}  >
                    <Col className="mt-3 mb-1">
                        <div className="footer ">
                            <h4>Vission Eye Hospital</h4>
                            <div className="footer-list">
                                <h5>Terms</h5>
                                <h5>Licenses</h5>
                            </div>
                        </div>
                    </Col>
                    <Col className="mt-3 mb-1">
                        <div className="footer">
                            <h4>HELP</h4>
                            <div className="footer-list">
                                <h5>Help Center</h5>
                                <h5>Authors</h5>
                            </div>
                        </div></Col>
                    <Col className="mt-3 mb-1">
                        <div className="footer">
                            <h4>OUR COMMUNITY</h4>
                            <div className="footer-list">
                                <h5>Community</h5>
                                <h5>Blog</h5>
                                <h5>Forums</h5>
                                <h5>Meetups</h5>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Footer;