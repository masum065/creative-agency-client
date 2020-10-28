import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import { ReactComponent as Cloudcomputing } from '../../../../images/dashbord-icons/cloud-computing.svg'
import styled from 'styled-components';
import UserSidebar from '../../Sidebar/UserSidebar/UserSidebar';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { InputSubmit } from '../../../Home/ContactForm/ContactForm';
import { UserContext } from '../../../../App';


const Orders = () => {
    document.title = "User Order - Crative Agency"
    const [loggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors ,reset } = useForm();
    const [submitMessage, setSubmitMessage]= useState(false)
    
    const id = useParams()
    const [service, setService] = useState([])
    const productId = id.id !== undefined ? (id.id) : '';
    useEffect(() => {
        productId && fetch(`https://intense-coast-60093.herokuapp.com/order/${productId}`)
        .then((response) => response.json())
        .then((data) => setService(data));
      
        }, [productId]);


      const onSubmit = (data)=> {
        let newOrder = service? { ...data, status: 'pending', image: service.image } : {...data , ...data, status: 'pending'};
        
        fetch('https://intense-coast-60093.herokuapp.com/addOrder',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
             body: JSON.stringify(newOrder),
        })
          .then((response) => response.json())
          .then((data) => {
            if(data){
                reset(true)
                setSubmitMessage(true)
            } 
             
          });   
      }


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

                        <form onSubmit={handleSubmit(onSubmit)}>
                            {submitMessage && <p className='alert alert-success shake'>Order successfully Submitted !!</p>}
                            <div className="form-input">
                                <input type="text" name="name" placeholder="Your name / company’s name" ref={register({ required: true })} />

                                {errors.name && <span>This field is required</span>}
                            </div>

                            <div className="form-input">
                                <input type="email" name="email" defaultValue={loggedInUser.email} placeholder="Your email address" ref={register({ required: true })} readOnly={loggedInUser.email? true : false}/>
                                {errors.email && <span>Email field is required</span>}
                            </div>

                            <div className="form-input">
                                <input ref={register({ required: true })} type="text" name="service" placeholder="Service Name" defaultValue={service && service.title} />
                                {errors.service && <span>This field is required</span>}
                            </div>

                            <div className="form-input">
                                <textarea name="details" placeholder='Project Details' ref={register({ required: true })} ></textarea>
                                {errors.details && <span>Details field is required</span>}
                            </div>
                            
                            <Row>
                                <Col md={6}>
                                    <div className="form-input">
                                        <input ref={register({ required: true })} type="number" name="price" placeholder="Price" />
                                        {errors.price && <span>Price field is required</span>}
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className='file-field'>
                                        {/* <p>{filefeild.name}</p> */}
                                        <input type='file' name='file' id='file' style={{ display: 'none' }}/>
                                        <label htmlFor='file'>
                                            <Cloudcomputing width='25' fill='#0084ff' height='25' />
                                            <span style={{ marginLeft: '10px' }}>Upload File</span>
                                        </label>
                                    </div>
                                </Col>
                                <InputSubmit type="submit" />
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

    input[type="submit"] {
        margin-left: 17px;
        margin-top: 20px;
        padding: 15px 50px !important;
    }
    
    .alert {
        padding: 5px 20px;
        font-size: 14px;
    }

    .shake {
        -webkit-animation-name: shake;
        animation-name: shake;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        }
        @-webkit-keyframes shake {
        0%, 100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        }
        10%, 30%, 50%, 70%, 90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
        }
        20%, 40%, 60%, 80% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0);
        }
        }
        @keyframes shake {
        0%, 100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        }
        10%, 30%, 50%, 70%, 90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
        }
        20%, 40%, 60%, 80% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0);
        }
        } 

        @media (max-width:767px){
            max-width: 100%;


            input[type="submit"] {
                margin-top: 85px;
            }
        }


`

export default Orders;