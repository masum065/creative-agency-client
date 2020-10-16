import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';
import FeedbackCard from './FeedBackCard/FeedbackCard';


const FeedBack = () => {

    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(response => response.json())
        .then(data => setFeedbackData(data))
    },[])

    return (
        <Container className="section-padding">
            <SectionTitle color="#171B4E">Clients <span>Feedback</span></SectionTitle>

            <Row className="padding-top-50">
                {
                    feedbackData.map(feed => <FeedbackCard key={feed._id} feed={feed} />)
                }
            </Row>
        </Container>
    );
};

export default FeedBack;