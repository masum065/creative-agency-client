import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Hero from '../Hero/Hero';
import Menu from './Menu/Menu';

const Header = () => {
    return (
        <HeaderStyle>
            <Container>
                <Menu />
                <Hero />
            </Container>
        </HeaderStyle>
    );
};

const HeaderStyle = styled.section`
    background: #FBD062;
    position: relative;
    z-index: 1;

    ::before{
        position: absolute;
        bottom: 0;
        left: 0;
        height: 200px;
        width: 100%;
        content: '';
        clip-path: polygon(100% 49%, 0% 100%, 100% 100%);
        background: #fff;
    }

`
export default Header;