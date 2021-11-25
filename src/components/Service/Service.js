import React,{useEffect} from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { Name, img, id, description } = props.service

    return (
        
        <div className="mt-5">

            <Card style={{ width: '22rem' }} className="card-img" >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{Name}</Card.Title>
                    <Card.Text>
                        <small> {description.slice(0, 100)} </small>
                    </Card.Text>
                    <Link to={`/service/${id}`} >
                        <Button variant="primary">Details</Button>
                    </Link>
                </Card.Body>
            </Card>
            {/* <Col >
                <Card className="card-img">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{Name}</Card.Title>
                        <Card.Text>
                            <small>{description.slice(0, 100)}</small>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        
                    </Card.Footer>
                </Card>
            </Col> */}
        </div>
    );
};

export default Service;


