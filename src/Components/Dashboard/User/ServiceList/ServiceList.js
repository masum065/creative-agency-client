import React, { useState ,useEffect, useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../../../App';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import UserSidebar from '../../Sidebar/UserSidebar/UserSidebar';
import ServiceListCard from './ServiceListCard/ServiceListCard';


const ServiceList = () => {

    const [loggedInUser] = useContext(UserContext)
    const [serviceList, setServiceList] = useState([]);

    useEffect(()=>{
        const abrotController = new AbortController();
        const signal = abrotController.signal;

        fetch('http://localhost:5000/serviceList',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        },{signal : signal})
        
        .then(response => response.json())
        .then(data => setServiceList(data))

        return function cleanup() {
            abrotController.abort()
        }
    },[loggedInUser.email])


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
                            serviceList.map(service => <ServiceListCard key={service._id} service={service}/>)
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceList;