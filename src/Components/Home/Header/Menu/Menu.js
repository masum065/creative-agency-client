import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PrimaryBtn from '../../../Shared/PrimaryBtn/PrimaryBtn';
import SiteLogo from '../../../Shared/SiteLogo';

const Menu = () => {
    return (
            <Row className="py-4">
                <Col xl={3}>
                    <SiteLogo/>
                </Col>
                <Col xl={9}>
                    <MenuStyle>
                        <Link to='/home'>Home</Link>
                        <Link to="/portfolio">Our Portfolio</Link>
                        <Link to="/team">Our Team</Link>
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/login"><PrimaryBtn>Login</PrimaryBtn></Link>
                    </MenuStyle>
                </Col>
            </Row>
    );
};

const MenuStyle = styled.div`
    text-align: right;
    padding: 5px 0;

        a{
            color: #474747;
            padding: 5px 15px;
            margin-right: 15px;
            font-size: 14px;
        }

`
export default Menu;