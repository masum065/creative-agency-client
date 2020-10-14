import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import { ReactComponent as Cloudcomputing } from '../../../../images/dashbord-icons/cloud-computing.svg'
import PrimaryBtn from '../../../Shared/PrimaryBtn/PrimaryBtn'
import styled from 'styled-components';
import UserSidebar from '../../Sidebar/UserSidebar/UserSidebar';



const Orders = () => {
    const handleBlur = () => {}


    return (
        <Container fluid>
            <Row className="plt-20">
                <DashboardHeader title='Order' />
            </Row>
            <Row className="pl-20">
                <Col xl={2}>
                <UserSidebar/>
                </Col>
                <Col style={{backgroundColor: '#F4F7FC'}} xl={10}>
                    
                    <UserFormStyle>

                        <form>
                            <div className="form-input">
                                <input onBlur={handleBlur} type="text" name="name" placeholder="Your name / company’s name" />
                            </div>
                            <div className="form-input">
                                <input onBlur={handleBlur} type="email" name="email" placeholder="Your email address" />
                            </div>
                            <div className="form-input">
                                <input onBlur={handleBlur} type="text" name="service" placeholder="Service Name" />
                            </div>
                            <div className="form-input">
                                <textarea name="details" placeholder='Project Details' onBlur={handleBlur}></textarea>
                            </div>
                            
                            <Row>
                                <Col md={6}>
                                    <div className="form-input">
                                        <input onBlur={handleBlur} type="number" name="price" placeholder="Price" />
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className='file-field'>
                                        {/* <p>{filefeild.name}</p> */}
                                        <input type='file' name='file' id='file'required style={{ display: 'none' }}/>
                                        <label htmlFor='file'>
                                            <Cloudcomputing width='25' fill='#0084ff' height='25' />
                                            <span style={{ marginLeft: '10px' }}>Upload Image</span>
                                        </label>
                                    </div>
                                </Col>
                                <PrimaryBtn>Submit</PrimaryBtn>
                            </Row>

                            
                        </form>

                    </UserFormStyle>
                </Col>
            </Row>
        </Container>
    );
};


export const UserFormStyle = styled.div`

    margin: 0px 0px;
    max-width: 60%;
    padding: 40px 20px;

    .form-input{

        input, textarea {
            width: 100%;
            border: 1px solid #fff;
            padding: 15px 20px;
            margin: 10px 0;
            border-radius: 5px;

            ::placeholder{
                color: #BCBCBC;
            }
            :focus{
                border-color: #E5E5E5;
            }
        }
        textarea{
            height: 120px;
            resize: none;
        }


    } 

    .file-field{
        position: relative;

        p {
            font-size: 19px;
            font-weight: 500;
            margin-bottom: 0;
        }

        label {
            position: absolute;
            top: 12px;
            background-color: #DEFFED;
            border: 1px solid #009444;
            padding: 13px 25px;
            border-radius: 5px;
            color: #009444;
            font-size: 17px;
            font-weight: 400;
            cursor: pointer;
            width: 100%;
            text-align: center;
        }

        path{
            fill: #009444;
        }
        
    } 
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type=number] {
        -moz-appearance: textfield;
    }

    button {
        margin-left: 17px;
        margin-top: 20px;
        padding: 11px 50px !important;
    }
    
    


`

export default Orders;