import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';
import FeedbackCard from './FeedBackCard/FeedbackCard';
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";


const override = css`
  display: block;
  margin: 100px auto;
  border-color: red;
`;

const FeedBack = () => {
    const [loading] = useState(true)
    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(()=>{
        fetch('https://intense-coast-60093.herokuapp.com/reviews')
        .then(response => response.json())
        .then(data => setFeedbackData(data))
    },[])

    return (
        <Container className="section-padding">
            <SectionTitle color="#171B4E">Clients <span>Feedback</span></SectionTitle>

            <Row className="padding-top-50">
            {!feedbackData.length && <PulseLoader css={override} size={15} color={"#7AB259"} loading={loading} />}
                {
                    feedbackData.map(feed => <FeedbackCard key={feed._id} feed={feed} />)
                }
            </Row>
        </Container>
    );
};

export default FeedBack;