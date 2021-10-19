import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { Name, img, id, description } = props.service

    return (
        <div className="mt-5 service ">
            <Col>
                <Card className="card-img" >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{Name}</Card.Title>
                        <p>{description.slice(0, 100)}</p>
                        <Link to={`/service/${id}`} >
                            <Button variant="primary">Details</Button>{' '}
                        </Link>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Service;