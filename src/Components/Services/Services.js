import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SectionTitle from '../Home/SectionTitle/SectionTitle';
import ServiceCard from './ServiceCard/ServiceCard';
import { useState } from 'react';
import { useEffect } from 'react';
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";


const override = css`
  display: block;
  margin: 100px auto;
  border-color: red;
`;


const Services = () => {
    const [loading] = useState(true)
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
            {!services.length && <PulseLoader css={override} size={15} color={"#7AB259"} loading={loading} />}
                {
                    services.map(service => <ServiceCard key={service._id} service={service}/>)
                }
            </Row>
        </Container>
    );
};

export default Services;