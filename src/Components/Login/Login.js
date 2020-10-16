import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Col, Container, Row } from 'react-bootstrap';
import SiteLogo from '../Shared/SiteLogo';
import google from '../../images/icons/google.png'
import styled from 'styled-components';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
  
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  
    const handleGoogleSignIn = () => {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function (result) {
        const { displayName, email, photoURL } = result.user;
        console.log(result.user);
        const signedInUser = { name: displayName, email, picture: photoURL }
        setLoggedInUser(signedInUser);
        storeAuthToken();
      }).catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    }
  
    const storeAuthToken = () => {
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
          sessionStorage.setItem('token', idToken);
          history.replace(from);
        }).catch(function (error) {
          // Handle error
        });
    }



    return (
        <Container className='padding-top-50'>
            <Row className="justify-content-center text-center">
                <Col xl={6}>
                <Link to='/home'><SiteLogo /></Link>
                    <LoginFormStyle>
                        <h4>Login With</h4>
                        <button onClick={handleGoogleSignIn}><img src={google} alt=""/> Continue with Google</button>

                        <p className="craete">Don’t have an account? <span>Create an account</span> </p>

                    </LoginFormStyle>
                </Col>
            </Row>
        </Container>
    );
};

const LoginFormStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 400px;
    border: 1px solid #ABABAB;
    border-radius: 5px;
    padding: 30px;
    margin-top: 50px;

    h4 {
        color: #000;
        font-weight: 700;
        font-size: 24px;
    }

    button {
        background: none;
        border: 1px solid #C7C7C7;
        display: block;
        width: 90%;
        border-radius: 50px;
        padding: 11px;
        position: relative;
        color: #000000;
        font-size: 16px;
        font-weight: 500;
        margin: 30px 0 20px;
        transition: all linear .01s;
        img {
            max-width: 35px;
            position: absolute;
            left: 5px;
            top: 5px;
        }
        :focus{
            outline: none;
            border-color: #FBD062;
            color: #FBD062;
        }
    }

    .craete {
        color: #000;
        font-weight: 400;

        span {
            color: #3F90FC;
            text-decoration: underline;
            cursor: pointer;
        }
    }

`

export default Login;