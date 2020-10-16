import React, { useState } from 'react';
import {useSpring, animated} from 'react-spring'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ServiceCard = (props) => {
    const {image, description , title, _id} = props.service;
    const [state, toggle] = useState(false)
  const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })

    return (
        <Col sm={6} lg={6} xl={4}>
            <Link to={`/order/${_id}`}>
            <ServiceCardStyle onMouseEnter={() => toggle(!state)}>
                <animated.div
                        style={{
                        opacity: x.interpolate({ range: [1, 1], output: [1, 1] }),
                        transform: x
                            .interpolate({
                            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                            }).interpolate(x => `scale(${x})`)
                        }}>
                        <img src={`data:image/png;base64,${image.img}`} alt={title.split(' ').slice(0,1)}/>
                 </animated.div>
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
    cursor: pointer;

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