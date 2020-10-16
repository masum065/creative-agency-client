import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { InputSubmit } from '../../../Home/ContactForm/ContactForm';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import AdminSidebar from '../../Sidebar/AdminSidebar/AdminSidebar';

const MakeAdmin = () => {
    document.title = "Make Admin - Crative Agency"
    const { register, handleSubmit, errors ,reset} = useForm();


    const onSubmit = data => {

        fetch('https://intense-coast-60093.herokuapp.com/makeAdmin',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data =>{
            reset()
        })
        
    };
    return (
        <Container fluid>
            <Row className="plt-20">
                <DashboardHeader title='Make Admin'/>
            </Row>
            <Row className="pl-20">
                <Col xl={2}>
                <AdminSidebar/>
                </Col>
                <Col style={{backgroundColor: '#F4F7FC', height: '85vh'}} xl={10}>
                <MakeAdminForm>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="Email">Email</label>
                        <input name="email" type="email" placeholder='jon@gamil.com' ref={register({ required: true })} />
                        {errors.email && <span className='error'>Email field is required</span>}
                        
                        <InputSubmit type="submit" value='Submit' />
                    </form>
                </MakeAdminForm>
                </Col>
            </Row>
        </Container>
    );
};


const MakeAdminForm = styled.div`
    padding: 30px 30px 30px 30px;
    background: #ffff;
    margin: 30px 30px 30px 20px;
    height: 50vh;
    border-radius: 20px;

    form {
        width: 60%;
    }
    label {
        display: block;
        margin-bottom: 8px;
        font-weight: 600;
    }
    input[type="email"] {
        border: 1px solid #DDDDDD;
        padding: 10px 12px;
        width: 70%;
        margin-right: 15px;
        border-radius: 5px;
    }
    .fjTkim {
        border: none;
       background: #009444;
        color: #fff;
        padding: 10px 45px;
        border-radius: 5px;
        width: 25%;
    }
    span.error {
        display: block;
        position: absolute;
        color: red;
        font-size: 14px;
        font-style: italic;
        margin-top: 3px;
    }

`

export default MakeAdmin;