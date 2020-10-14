import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';
import nish from '../../../images/customer-1.png'
import miriam from '../../../images/customer-2.png'
import bria from '../../../images/customer-3.png'
import FeedbackCard from './FeedBackCard/FeedbackCard';


const feedData = [
    {
        img: nish,
        name: 'Nash Patrik',
        designation: 'CEO, Manpol',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
    },
    {
        img: miriam,
        name: 'Miriam Barron',
        designation: 'CEO, Manpol',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
    },
    {
        img: bria,
        name: 'Bria Malone',
        designation: 'CEO, Manpol',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
    },

]


const FeedBack = () => {
    return (
        <Container className="section-padding">
            <SectionTitle color="#171B4E">Clients <span>Feedback</span></SectionTitle>

            <Row className="padding-top-50">
                {
                    feedData.map(feed => <FeedbackCard feed={feed} />)
                }
            </Row>
        </Container>
    );
};

export default FeedBack;