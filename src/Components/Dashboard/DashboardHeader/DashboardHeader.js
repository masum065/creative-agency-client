import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../../App';
import SiteLogo from '../../Shared/SiteLogo';

const DashboardHeader = (props) => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <>
            <Col lg={2}>
                <LogoMedia>
                    <Link to='/'><SiteLogo /> </Link>
                </LogoMedia>
               
            </Col>
            <Col col={6} lg={5}>
                <H5Div>
                    <h5>{props.title}</h5>
                </H5Div>
            </Col>
            <Col className='text-right' col={6} lg={5}>
            <h4 style={{fontSize: '18px',paddingRight: '25px', fontWeight:'600'}}>{loggedInUser.name}</h4>
            </Col>
        </>
    );
};
const LogoMedia = styled.div`
    @media (max-width:992px){
        text-align: center;
    }
`
const H5Div = styled.div`
    
    margin-bottom:0;
    margin-top: 0px;

    @media (max-width:767px){
        margin-top: 30px;
        margin-bottom: -31px;
        font-size: 16px;
    }
    
`



export default DashboardHeader;