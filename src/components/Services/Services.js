import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        < div >
            <Container>
                <h1 className="mt-5 text-center">SERVICES AT A GLANCE</h1>
                <Row xs={1} md={3}>
                    {services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)}
                </Row>
            </Container>

        </div >
    );
};

export default Services;