  
import React, { useContext, useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import {UserContext } from '../../../App';

const PrivateRoute = ({children, ...rest}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const isLoggedIn = () => {
      const token = sessionStorage.getItem('token');
      if(!token){
        return false;
      }

      const decodedToken = jwt_decode(token);
      if(decodedToken.sub){
        if(!loggedInUser.sub){
          setLoggedInUser({ ...decodedToken})
        }
      }
      // get current time
      const currentTime = new Date().getTime() / 1000;
      // compare the expiration time with the current time
      // will return false if expired and will return true if not expired
      return decodedToken.exp > currentTime;
    }

console.log(loggedInUser);
    return (
        <Route
      {...rest}
      render={({ location }) =>
        (loggedInUser.email || isLoggedIn()) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;