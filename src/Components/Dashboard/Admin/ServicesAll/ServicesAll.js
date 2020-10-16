import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import AdminSidebar from '../../Sidebar/AdminSidebar/AdminSidebar';

const ServicesAll = () => {
    return (
        <Container fluid>
            <Row className="plt-20">
                <DashboardHeader title='Services'/>
            </Row>
            <Row className="pl-20">
                <Col xl={2}>
                <AdminSidebar/>
                </Col>
                <Col style={{backgroundColor: '#F4F7FC'}} xl={10}>
                    <ServiceTableStyle>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Project Details</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Masum Billah</td>
                                    <td>MasumBillah@email.com</td>
                                    <td>Graphic Design</td>
                                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                                    <td>
                                        <Select selected='pending'>
                                            <option style={{color: '#FF4545'}} >Pending</option>
                                            <option selected style={{color: '#20A15B'}} >Done</option>
                                            <option style={{color: '#FFBD3E'}}>On Going</option>
                                        </Select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </ServiceTableStyle>
                </Col>
            </Row>
        </Container>
    );
};



const ServiceTableStyle = styled.div`
    display: block;
    padding: 32px 30px;
    margin: 30px 16px;
    background: #fff;
    border-radius: 15px;

    table {
        border-collapse: collapse;
        width: 100%;
        padding: 20px;
    }

    th {
        background: #F4F7FC;
        padding: 15px 15px;
        color: #7A7A7A;
        font-weight: 500;
        font-size: 16px;

        :first-child {
            border-radius: 15px 0 0 15px;
        }
        :last-child {
            border-radius: 0 15px 15px 0;
        }
        :nth-child(4) {
            width: 32%;
        }
    }

    td {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: 500;
    }




`
const Select = styled.select`
    border: none;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    color : ${props => props.selected === 'done'? '#20A15B' : props.selected === 'pending'? '#FF4545' : '#FFBD3E'};
`
export default ServicesAll;