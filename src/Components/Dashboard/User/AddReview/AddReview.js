import React, { useContext } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';
import { InputSubmit } from '../../../Home/ContactForm/ContactForm';
import { Span } from '../../../Home/ContactForm/ContactForm';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import UserSidebar from '../../Sidebar/UserSidebar/UserSidebar';
import { UserFormStyle } from '../Orders/Orders';

const AddReview = () => {
    document.title = "ADD Review - Crative Agency"
    const [loggedInUser] = useContext(UserContext);
    
    const [submitMessage, setSubmitMessage]= useState(false)
    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = data => {
        if(data !== undefined){
            const newReview = {...data , userPhoto: loggedInUser.picture}
 

            fetch('https://intense-coast-60093.herokuapp.com/addReview',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newReview)
            })
            .then(response => response.json())
            .then(data => {
                if(data){
                    setSubmitMessage(true)
                reset()
                }
            })
            }
    };


    return (
        <Container fluid>
            <Row  className="plt-20">
                <DashboardHeader title="Review"/>
            </Row>
            <Row className="pl-20">
                <Col xl={2}>
                <UserSidebar/>
                </Col>
                <Col style={{backgroundColor: '#F4F7FC'}} xl={10}>

                <UserFormStyle>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    {submitMessage && <p className='alert alert-success'>Thanks For Your FeedBack.</p>}

                        <div className="form-input">
                            <input name="name" placeholder='Your name' ref={register({ required: true })} />
                            {errors.name && <Span>Name field is required</Span>}
                        </div>
                        <div className="form-input">
                            <input name="designation" placeholder='Company’s name, Designation' ref={register({ required: true })} />
                            {errors.designation && <Span>company field is required</Span>}
                        </div>
                        <div className="form-input">
                            <textarea name="quote" placeholder='Description' ref={register({ required: true })} ></textarea>
                            {errors.quote && <Span>Description field is required</Span>}
                        </div>

                        <InputSubmit type="submit" value="Submit"/>
                    </form>
                </UserFormStyle>
                </Col>
            </Row>
        </Container>
    );
};

export default AddReview;