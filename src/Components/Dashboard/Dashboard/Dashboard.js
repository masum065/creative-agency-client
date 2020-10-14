import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import UserSidebar from '../User/UserSidebar/UserSidebar';

const Dashboard = () => {
    return (
        <Container style={{padding: '20px'}} fluid>
            <Row>
                <DashboardHeader/>
            </Row>
            <Row>
                <Col xl={2}>
                <UserSidebar/>
                </Col>
                <Col style={{backgroundColor: '#F4F7FC'}} xl={10}>

                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;