import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SectionTitle from '../Home/SectionTitle/SectionTitle';
import ServiceCard from './ServiceCard/ServiceCard';
import { useState } from 'react';
import { useEffect } from 'react';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{

       

        const apiURL = 'https://intense-coast-60093.herokuapp.com'
        fetch(`${apiURL}/services`)
        .then(response => response.json())
        .then(data => setServices(data) )

    
    },[])


    return (
        <Container className="section-padding">
            <SectionTitle color="#2D2D2D">Provide awesome <span>services</span></SectionTitle>
            <Row className="mt-xl-5">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}/>)
                }
            </Row>
        </Container>
    );
};

export default Services;