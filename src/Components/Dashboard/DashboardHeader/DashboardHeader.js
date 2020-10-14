import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SiteLogo from '../../Shared/SiteLogo';

const DashboardHeader = (props) => {
    return (
        <>
            <Col xl={2}>
               <Link to='/home'><SiteLogo /> </Link>
            </Col>
            <Col xl={5}>
                <h5>{props.title}</h5>
            </Col>
            <Col className='text-right' xl={5}>
                <h4>Pro Rasel</h4>
            </Col>
        </>
    );
};

export default DashboardHeader;