import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import SiteLogo from '../../Shared/SiteLogo';

const DashboardHeader = (props) => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <>
            <Col xl={2}>
               <Link to='/home'><SiteLogo /> </Link>
            </Col>
            <Col xl={5}>
                <h5>{props.title}</h5>
            </Col>
            <Col className='text-right' xl={5}>
    <h4>{loggedInUser.name}</h4>
            </Col>
        </>
    );
};

export default DashboardHeader;