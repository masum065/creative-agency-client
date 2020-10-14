import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import heroFrame from '../../../images/logos/Frame.png'
import PrimaryBtn from '../../Shared/PrimaryBtn/PrimaryBtn';

const Hero = () => {
    return (
        <Row className='py-3'>
            <Col xl={5}>
                <HeroText>
                    <h1>Let’s Grow Your <br/>Brand To The <br/> Next Level</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>

                    <PrimaryBtn>Hire Us</PrimaryBtn>
                </HeroText>
            </Col>
            <Col xl={7}>
                <img src={heroFrame} alt=""/>
            </Col>
        </Row>
    );
};
const HeroText = styled.div`
    padding: 80px 0;


    h1 {
        font-size: 48px;
        font-weight: 700;
        line-height: 60px;
        color: #111430;
    }

    p {
        font-size: 16px;
        color: #000;
        line-height: 24px;
        max-width: 80%;
        margin: 20px 0;
    }

    button {
        padding: 11px 62px;
        margin-top: 10px;
    }

`

export default Hero;