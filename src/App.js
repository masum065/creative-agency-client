import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddService from './Components/Dashboard/Admin/AddService/AddService';
import MakeAdmin from './Components/Dashboard/Admin/MakeAdmin/MakeAdmin';
import ServicesAll from './Components/Dashboard/Admin/ServicesAll/ServicesAll';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddReview from './Components/Dashboard/User/AddReview/AddReview';
import Orders from './Components/Dashboard/User/Orders/Orders';
import ServiceList from './Components/Dashboard/User/ServiceList/ServiceList';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';


export const UserContext = createContext(); 
export const DashBoadSidebar = createContext(); 

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [activeBar , setActiveBar] = useState({order: true,serviceAll: true});
  return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <DashBoadSidebar.Provider value={[activeBar , setActiveBar]}>
            <Router>
              <Switch>
                <Route path ="/home">
                  <Home/>
                </Route>
                <Route path ="/login">
                  <Login/>
                </Route>
                <PrivateRoute path ="/dashboard/order">
                  <Orders/>
                </PrivateRoute>

                <PrivateRoute path ="/dashboarrd">
                  <Dashboard/>
                </PrivateRoute>

                <PrivateRoute path ="/order/:id">
                  <Dashboard/>
                </PrivateRoute>

                <PrivateRoute path ="/dashboard/service">
                  <ServiceList />
                </PrivateRoute>

                <PrivateRoute path ="/dashboard/review">
                  <AddReview />
                </PrivateRoute>
                <PrivateRoute path ="/dashboard/servicesAll">
                  <ServicesAll />
                </PrivateRoute>

                <PrivateRoute path ="/dashboard/addService">
                  <AddService />
                </PrivateRoute>

                <PrivateRoute path ="/dashboard/makeAdmin">
                  <MakeAdmin />
                </PrivateRoute>
                
                <Route exact path ="/">
                  <Home/>
                </Route>
                <Route  path ="*">
                  <NotFound/>
                </Route>
              </Switch>
            </Router>
          </DashBoadSidebar.Provider>
      </UserContext.Provider>
  );
}

export default App;
