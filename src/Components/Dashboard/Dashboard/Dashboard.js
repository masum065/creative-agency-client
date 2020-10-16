import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';


const Dashboard = () => {
    const [loggedInUser] = useContext(UserContext);
    const [isUser, setUser] = useState(false);
    const history = useHistory();

    useEffect(()=>{
        const abrotController = new AbortController();
        const signal = abrotController.signal;

        fetch('https://intense-coast-60093.herokuapp.com/checkAccess',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        },{signal : signal})
        
        .then(response => response.json())
        .then(data => data && history.push(`/dashboard/servicesAll`))

        return function cleanup() {
            abrotController.abort()
        }
    },[history, loggedInUser.email])


    useEffect(() => {
        const timer = setTimeout(() => {
            setUser(true)
            isUser && history.push(`/dashboard/order`)
        }, 400);
        return () => clearTimeout(timer);
      }, [history, isUser]);

    return (

           <>
           </>

    );
};

export default Dashboard;