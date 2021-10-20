import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import Header from '../shared/Header/Header';
import './SingleDetails.css'

const ServiceDetails = () => {
    const [serviceDetails, setServiceDetails] = useState([])
    let { id } = useParams()
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, []);
    const singleService = serviceDetails.find(ss => ss.id == id);


    return (
        <div>

            <Container className="mt-5 text-center single-details ">

                {singleService?.lenght === 0 ? <Spinner animation="border" role="status"
                >
                    <span className="visually-hidden ">Loading...</span>
                </Spinner> :

                    <div className="single">
                        <div>
                            <img className="single-img" src={singleService?.img} alt="" />
                        </div>
                        <div className="service-details">
                            <h3>{singleService?.Name}</h3>
                            <p>{singleService?.description}</p>
                        </div>
                    </div>}

            </Container>
        </div>
    );
};

export default ServiceDetails;