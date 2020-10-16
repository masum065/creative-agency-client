import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PrimaryBtn from '../../../Shared/PrimaryBtn/PrimaryBtn';
import SiteLogo from '../../../Shared/SiteLogo';

const Menu = () => {

    const [open, setOpen] = useState(false)
    return (
            <Row className="py-4">
                <Col xs={6} md={3} xl={3}>
                    <SiteLogo/>
                </Col>
                <Col xs={6} md={9} xl={9}>
                    <MenuStyle open={open} onClick={() => setOpen(!open)}>
                        <span/>
                        <span/>
                        <span/>
                    </MenuStyle>
                  
                    <Ul open={open}>
                        <Link onClick={() => setOpen(!open)} to='/home'>Home</Link>
                        <Link onClick={() => setOpen(!open)} to="/portfolio">Our Portfolio</Link>
                        <Link onClick={() => setOpen(!open)} to="/team">Our Team</Link>
                        <Link onClick={() => setOpen(!open)} to="/contact">Contact Us</Link>
                        <Link onClick={() => setOpen(!open)} to="/dashboarrd"><PrimaryBtn>Login</PrimaryBtn></Link>
                    </Ul>
                </Col>
            </Row>
    );
};
// a{
            // color: #474747;
            // padding: 5px 15px;
            // margin-right: 15px;
            // font-size: 14px;
        // }
const MenuStyle = styled.div`

    width: 2rem;
    height: 2rem;
    position: relative;
    top: 10px;
    z-index: 220;
    display: none;
    float: right;
    crusor: pointer;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    span {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? '#ccc' : '#333'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`


const Ul = styled.div`
    text-align: right;
    padding: 5px 0;

    a{
        color: #474747;
        padding: 5px 15px;
        margin-right: 15px;
        font-size: 14px;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #262626;
        position: fixed;
        z-index:11;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        transition: transform 0.3s ease-in-out;
        text-align: center;
        justify-content: center;
        padding-bottom: 80px;
        display: flex;
            
        a{
            color: #fff;
            font-size: 18px;
            margin: 15px 0;
            transition: transform 0.3s ease-in-out;

            :hover{
                color: #FBD062;
            }
            .bvwztX {
                padding: 10px 60px;
            }
        }
    }

         
    @media (max-width: 991px) {

        a {
            padding: 5px 7px;
            margin-right: 4px;
        }

        .bvwztX {
            padding: 9px 25px;
        }
    }
`


export default Menu;