import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { Name, img, id, description } = props.service

    return (
        <div className="mt-5 full-card">
            <Col>
                <Card>
                    <Card.Img variant="top" className="card-img" src={img} />
                    <Card.Body>
                        <Card.Title>{Name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>

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