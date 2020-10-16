import React from 'react';
import styled from 'styled-components';


const SectionTitle = (props) => {
    return (
        <div className="section-title">
            <SectionTitleStyle color={props.color}>{props.children}</SectionTitleStyle>
        </div>
    );
};


const SectionTitleStyle = styled.h2`
    text-align: center;
    font-size: 34px;
    line-height: 43px;
    color: ${(props) => props.color};
    font-weight: 600;
    margin: 20px 0;

    span{
        color: #7AB259;
    }

    @media (max-width:768px){
        font-size: 30px;
    }
`

export default SectionTitle;