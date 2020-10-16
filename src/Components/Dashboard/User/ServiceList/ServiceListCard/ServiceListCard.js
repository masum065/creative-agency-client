import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import serviceIcon from '../../../../../images/icons/service4.png'

const ServiceListCard = (props) => {

    const {image,service,status,details} = props.service
    return (
        <Col xl={5}>
            <ServiceCardStyle>
                <div className="service-head">
                    

        {
            image ? <img src={`data:image/png;base64,${image.img}`} alt=""/>
            :
            <img src={serviceIcon} alt=""/>
        }
                    <SwingBtn status = {status}>{status}</SwingBtn>
                </div>
                <div className="body">
                    <h4>{service}</h4>
                    <p>{details}</p>
                </div>
            </ServiceCardStyle>
        </Col>
    );
};


const ServiceCardStyle = styled.div`
background: #fff;
padding: 40px 30px 5px;
border-radius: 20px;
margin-top: 35px;

.service-head {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        max-width: 70px;
    }
}
.body {
    margin-top: 20px;
    min-height: 115px;

    h4 {
        font-size: 20px;
        font-weight: 600;
        color: #111430;
    }

    p{
        color: #434343;
        font-size: 16px;
        font-weight: 300;
        margin-top: 10px;
    }
}


`
const SwingBtn = styled.button`
   
        border: none; 
        background: ${props => props.status === 'done' ? '#C6FFE0' : props.status === 'pending' ? '#FFE3E3' : '#FFF3B2'};
        
        color: ${props => props.status === 'done' ? '#009444' : props.status === 'pending' ? '#FF4545' : '#b77e10'};
        padding: 9px 30px;
        border-radius: 5px;

        :focus{
            outline: none;
        }
  

`

export default ServiceListCard;