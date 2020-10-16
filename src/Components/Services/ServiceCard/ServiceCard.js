import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ServiceCard = (props) => {
    const {image, description , title, _id} = props.service;
    return (
        <Col sm={6} lg={6} xl={4}>
            <Link to={`/order/${_id}`}>
            <ServiceCardStyle>
                <img src={`data:image/png;base64,${image.img}`} alt={title.split(' ').slice(0,1)}/>
                <h3>{title}</h3>
                <p>{description}</p>
            </ServiceCardStyle>
            </Link>
        </Col>
    );
};

const ServiceCardStyle = styled.div`
    text-align: center;
    border-radius: 10px;
    padding: 35px 40px 15px;
    min-height: 325px;
    margin-top: 30px;
    transition: all linear .3s;
    display: block;

    img {
        max-width: 80px;
    }
    h3 {
        font-size: 20px;
        font-weight: 600;
        margin-top: 20px;
        margin-bottom: 13px;
        color: #2D2D2D;
    }
    p {
        color: #434343;
        font-size: 16px;
        line-height: 28px;
    }

    :hover{
        box-shadow: 0px 0px 20px 16px #F3F3F3;
    }
`


export default ServiceCard;