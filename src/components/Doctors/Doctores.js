import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctores = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(()=>{
        document.title="doctors"
    },[])
    useEffect(() => {
        fetch('/doctores.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    
    return (
        <div>
            <Container>


                <Row xs={1} md={3}>
                    {doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>
                    )}
                </Row>
            </Container>

        </div>
    );
};

export default Doctores;