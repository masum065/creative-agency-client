import React from 'react';
import styled from 'styled-components';

const PrimaryBtn = (props) => {
    return (
       
    <PrimaryBtnStyle green={props.green}>{props.children}</PrimaryBtnStyle>
       
    );
};

const PrimaryBtnStyle = styled.button`
    display: inline-block;
    border: none;
    background: ${(props) => props.green? '#009444': '#111430'};
    color: #fff;
    padding: 11px 40px;
    font-size: 16px;
    border-radius: 5px;
    transition: all linear .1s;

    :focus{
        outline: none;
    }
    :active{
        opacity: .95;
    }
`
export default PrimaryBtn;