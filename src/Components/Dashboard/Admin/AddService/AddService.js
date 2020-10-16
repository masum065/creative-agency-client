import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import AdminSidebar from '../../Sidebar/AdminSidebar/AdminSidebar';
import { ReactComponent as Cloudcomputing } from '../../../../images/dashbord-icons/cloud-computing.svg'
import styled from 'styled-components';
import PrimaryBtn from '../../../Shared/PrimaryBtn/PrimaryBtn';

const AddService = () => {

    const [service , setService] = useState({})
    const [file , setFile] = useState({})

   
        const handleBlur = (e) =>{
            const newService = {...service};
            newService[e.target.name] = e.target.value;
            setService(newService);
         
        } 

    const handleFileChange = (e) =>{
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) =>{

        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', service.title);
        formData.append('description', service.description);

        fetch('https://intense-coast-60093.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })

        e.preventDefault();
    }


    return (
        <Container fluid>
            <Row className="plt-20">
                <DashboardHeader title='Add New Service'/>
            </Row>
            <Row className="pl-20">
                <Col xl={2}>
                <AdminSidebar/>
                </Col>
                <Col style={{backgroundColor: '#F4F7FC', height: '85vh'}} xl={10}>
                    <AddServiceStyle>

                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col xl={8}>
                                    <div className="form-input">
                                        <label htmlFor="title">Service Title</label>
                                        <input type="text" onBlur={handleBlur} name="title" placeholder="Enter Title"/>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className='file-field'>
                                            <p>{file.name}</p>
                                        <input type='file' onChange={handleFileChange} id='file' name='file' style={{ display: 'none' }}/>
                                        <label htmlFor='file'>
                                                <Cloudcomputing width='25' fill='#009444' height='25' />
                                            <span style={{ marginLeft: '10px' }}>Upload Image</span>
                                        </label>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={8}>
                                    <div className="form-input">
                                        <label htmlFor="description">Description</label>
                                            <textarea onBlur={handleBlur} name="description" placeholder="Enter Description" ></textarea>
                                    </div>
                                </Col>
                            </Row>
                            <PrimaryBtn green>Submit</PrimaryBtn>
                        </form>

                        
                    </AddServiceStyle>
                </Col>
            </Row>
        </Container>
    );
};


const AddServiceStyle = styled.div`

    padding: 30px;
    margin: 35px 25px;
    border-radius: 20px;
    background: #fff;
    position: relative;

    form {
        max-width: 75%;
        padding: 15px;

        .form-input {
            margin-bottom: 20px;

            label {
                font-weight: 600;
            }

            input, textarea {
                width: 100%;
                border: 1px solid #DDDDDD;
                border-radius: 5px;
                padding: 11px 21px;
            }
            textarea{
                resize: none;
                height: 140px;
            }
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
        top: 32px;
        background-color: #DEFFED;
        border: 1px solid #009444;
        padding: 10px 25px;
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

button {
    position: absolute;
    right: 4%;
    margin-top: 42px;
    padding: 10px 45px !important;
}

`

export default AddService;