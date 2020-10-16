import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import ContactForm from '../ContactForm/ContactForm';

const Footer = () => {
    const onSubmit = data => console.log(data);
    return (
        <FooterStyle>
            <Container>
                <Row>
                    <Col xl={6}>
                        <div className="footer-left">
                            <h3>Let us handle your project, professionally.</h3>
                            <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <ContactForm onSubmit={onSubmit}/>
                    </Col>
                </Row>

                <div className="copyright-text">copyright Orange labs {(new Date()).getFullYear()}</div>
            </Container>
        </FooterStyle>
    );
};

const FooterStyle= styled.footer`
background: #FBD062;
padding: 60px;

    .footer-left{
        padding-top: 30px;
        max-width: 80%;

        h3 {
            color: #2D2D2D;
            font-size: 34px;
            font-weight: 600;
            line-height: 41px;
        }

        p {
            font-size: 14px;
            margin-top: 25px;
            color: #4C4C4C;
            line-height: 25px;
        }
    }


    .copyright-text {
        text-align: center;
        margin-top: 130px;
        color: #434343;
        font-size: 14px;
        margin-bottom: -20px;
    }

    @media (max-width: 768px){
        .footer-left{
            max-width: 100%;

            h3 {
                font-size: 26px;
                line-height: 33px;
            }
            p{
                margin-bottom: 30px;
            }
        } 
    }
`

export default Footer;