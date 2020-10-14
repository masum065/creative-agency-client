import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

const FeedbackCard = (props) => {

    const {img, name, designation, quote} = props.feed;
    return (
        <Col xl={4}>
            <FeedbackCardStyle>
                <div className="avatar">
                    <img src={img} alt={name.split(' ').slice(0,1)}/>
                    <h4>{name} <span>{designation}</span> </h4>
                </div>
                <p>{quote}</p>
            </FeedbackCardStyle>
        </Col>
    );
};

const FeedbackCardStyle = styled.div`
border: 1px solid #BFBFBF;
    border-radius: 5px;
    padding: 30px 10px 20px 20px;
    margin-top: 30px;

    .avatar {
        display: flex;
        align-items: center;

        img {
            display: inline-block;
            max-width: 60px;
        }

        h4 {
            margin-left: 19px;
            font-size: 20px;
            font-weight: 600;

            span {
                display: block;
                font-size: 16px;
                margin-top: 3px;
            }
        }
    }

    p {
        color: #707070;
        line-height: 26px;
        margin-top: 20px;
    }
`

export default FeedbackCard;