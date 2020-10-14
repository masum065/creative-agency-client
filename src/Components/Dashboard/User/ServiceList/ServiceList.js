import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import UserSidebar from '../../Sidebar/UserSidebar/UserSidebar';
import ServiceListCard from './ServiceListCard/ServiceListCard';
import webdesign from '../../../../images/icons/service1.png'
import graphcdesign from '../../../../images/icons/service2.png'


const serviceListData =[
    {
        title: 'Web & Mobile Design',
        description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
        img: webdesign,
        status: 'pending'
    },
    {
        title: 'Graphcs Design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
        img: graphcdesign,
        status: 'done'
    },
]
const ServiceList = () => {

    return (
        <Container fluid>
            <Row className="plt-20">
                <DashboardHeader title='Service List' />
            </Row>
            <Row className="pl-20">
                <Col xl={2}>
                    <UserSidebar />
                </Col>
                <Col className='pl-lg-4' style={{backgroundColor: '#F4F7FC' , height: '90vh'}} xl={10}>

                    <Row>
                        {
                            serviceListData.map(service => <ServiceListCard bg={service} service={service}/>)
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceList;