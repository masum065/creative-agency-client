import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const ContactForm = (props) => {
    const { register, handleSubmit, errors } = useForm();
    return (
        <ContactFormStyle>
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <div className="form-input">
                    <input name="email" placeholder="Your email address" ref={register({ required: true })} />
                    {errors.email && <Span>Email field is required*</Span>}
                </div>
                <div className="form-input">
                    <input name="name" placeholder="Your name / company’s name" ref={register({ required: true })} />
                    {errors.name && <Span>Name field is required*</Span>}
                </div>
                <div className="form-input">
                    <textarea name="message" placeholder='Your message' ref={register}></textarea>
                </div>
                <InputSubmit type="submit" />
            </form>
        </ContactFormStyle>
    );
};

const ContactFormStyle = styled.div`
.form-input{

    input, textarea {
        width: 100%;
        border: none;
        padding: 20px 30px;
        margin: 10px 0;
        border-radius: 5px;
        
        ::placeholder{
            color: #CFCFCF;
        }
        :focus::placeholder{
            color: #8F8F8F;
        }
    }
    textarea {
        min-height: 250px;
        resize: none;
    }
    
} 
    @media (max-width: 768px){
        .form-input{
            input, textarea{
                padding: 11px 22px;
            }
            textarea {
                min-height: 200px;
            }
        }
        
        
    }

`
export const InputSubmit = styled.input`
    border: none;
    background: #111430;
    color: #fff;
    padding: 10px 45px;
    border-radius: 5px;
`

export const Span = styled.span`
    color: red;
    font-size: 13px;
    margin-top: -8px;
    display: block;
    font-style: italic;
`

export default ContactForm;