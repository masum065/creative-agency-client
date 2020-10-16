import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'
import styled from 'styled-components';

const brandLogos = [
    {   
        name: 'Slack',
        logo: slack,
    },
    {   
        name: 'Google',
        logo: google,
    },
    {   
        name: 'Uber',
        logo: uber,
    },
    {   
        name: 'Netflix',
        logo: netflix,
    },
    {   
        name: 'AriBnb',
        logo: airbnb,
    },

]

const Brand = () => {
    return (
        <Container>
            <Row className = 'justify-content-center'>
                {
                    brandLogos.map((brand, index) => <Col  key={index} xs={4} sm={4} lg={2} xl={2}> <BradBox><img src={brand.logo} alt={brand.name}/></BradBox></Col>)
                }
            </Row>
        </Container>
    );
};


const BradBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;

    img {
        max-width: 125px;
    }

    @media (max-width: 768px){
        height: 0px;
        margin-top: 70px;
        img {
            max-width: 115px;
        }
    }

    @media (max-width: 991px){
        height: 0px;
        margin-top: 75px;
        img {
            max-width: 120px;
        }
    }
    
`
export default Brand;