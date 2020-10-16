import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import notFoundImage from '../../images/notFound.png'
import PrimaryBtn from '../Shared/PrimaryBtn/PrimaryBtn';
const NotFound = () => {
    return (
        <Div>
            <Link to='/home'>
            <PrimaryBtn>Back To Home</PrimaryBtn>
            </Link>
            
        </Div>
    );
};

const Div = styled.div`

background-image: url(${notFoundImage});
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

button {
    background: #FBD062;
    color: #2F2E41;
    font-size: 20px;
    margin-top: 20%;
    font-weight: bold;
    a{
       
        
    }
    
}
}


`

export default NotFound;