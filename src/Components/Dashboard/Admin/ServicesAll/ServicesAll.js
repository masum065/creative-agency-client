import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import AdminSidebar from '../../Sidebar/AdminSidebar/AdminSidebar';
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";



const override = css`
  display: block;
  margin: 100px auto;
  text-align: center;
  position: absolute;
  justify-content: center;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
`;


const ServicesAll = () => {
    document.title = "All Services - Crative Agency"
    const [loading] = useState(true)
    const [services, setServices] = useState([])
    const [selectedService ,setSelectedService] = useState({})
    const [color ,setColor] = useState(false)
    
    useEffect(()=>{
        fetch('https://intense-coast-60093.herokuapp.com/allOrders')
        .then(response => response.json())
        .then(data => setServices(data))
    },[color, selectedService])

    const handleStatus = (status) =>{
        
        const orderId = selectedService._id;
        const updatedStatus = status.toLowerCase()

        console.log(selectedService.status);
        // updating status
        fetch(`https://intense-coast-60093.herokuapp.com/updateOrder/${orderId}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({status: updatedStatus})
        })
        .then(res => res.json())
        .then(data => {console.log(data);})
    }
    return (
        <Container fluid>
            <Row className="plt-20">
                <DashboardHeader title='Services'/>
            </Row>
            <Row className="pl-20">
                <Col xl={2}>
                <AdminSidebar/>
                </Col>
                <Col style={{backgroundColor: '#F4F7FC', height:'85vh'}} xl={10}>
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
                            {!services.length && <PulseLoader css={override} size={15} color={"#7AB259"} loading={loading} />}
                                {
                                    services.map(service => <tr key={service._id}>
                                        <td>{service.name}</td>
                                        <td>{service.email}</td>
                                        <td>{service.service}</td>
                                        <td>{service.details}</td>
                                        <td>
                                        <Select color={service.status}
                                            onClick={() => {
                                                setSelectedService(service) 
                                                setColor(true)
                                            }}
                                            onChange ={(e)=>{
                                                handleStatus(e.target.value)
                                            }}>
                                                
                                            <option selected={service.status === "pending"} style={{color: '#FF4545'}} >Pending</option>
                                            <option selected={service.status === "done"} style={{color: '#20A15B'}} >Done</option>
                                            <option selected={service.status === "on going"} style={{color: '#FFBD3E'}}>On Going</option>
                                        </Select>
                                        </td>
                                    </tr>
                                    )
                                }
                                
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
    color : ${props => props.color === 'done'? '#20A15B' : props.color === 'pending'? '#FF4545' : '#FFBD3E'};
`
export default ServicesAll;