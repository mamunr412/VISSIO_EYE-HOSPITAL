import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctor.css'

const Doctor = (props) => {
    const { img, Name, degre, hospital, specialist } = props.doctor
    return (
        <div className="mt-5 full-card">
            <Col>
                <Card>
                    <Card.Img variant="top" className="card-img" src={img} />
                    <Card.Body>
                        <Card.Title>{Name}</Card.Title>
                        <small> {degre} </small>
                        <small> {hospital} </small>
                        <small> {specialist} </small>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Doctor;