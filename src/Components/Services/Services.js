import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SectionTitle from '../Home/SectionTitle/SectionTitle';
import webdesign from '../../images/icons/service1.png'
import graphcdesign from '../../images/icons/service2.png'
import webDevelopment from '../../images/icons/service3.png'
import ServiceCard from './ServiceCard/ServiceCard';
import { useState } from 'react';
import { useEffect } from 'react';

// const serviceData = [
//     {
//         title: 'Web & Mobile Design',
//         description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
//         img: webdesign
//     },
//     {
//         title: 'Graphcs Design',
//         description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
//         img: graphcdesign
//     },
//     {
//         title: 'Web Development',
//         description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
//         img: webDevelopment
//     },
// ];



const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{

        const abrotController = new AbortController();
        const signal = abrotController.signal;

        const apiURL = 'http://localhost:5000'
        fetch(`${apiURL}/services`,{signal : signal},)
        .then(response => response.json())
        .then(data => setServices(data) )

        return function cleanup() {
            abrotController.abort()
        }
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