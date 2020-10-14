import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddService from './Components/Dashboard/Admin/AddService/AddService';
import ServicesAll from './Components/Dashboard/Admin/ServicesAll/ServicesAll';
import AddReview from './Components/Dashboard/User/AddReview/AddReview';
import Orders from './Components/Dashboard/User/Orders/Orders';
import ServiceList from './Components/Dashboard/User/ServiceList/ServiceList';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';

export const DashBoadSidebar = createContext(); 

function App() {
  const [activeBar , setActiveBar] = useState({order: true,serviceAll: true});
  return (
    <DashBoadSidebar.Provider value={[activeBar , setActiveBar]}>
     <Router>
       <Switch>
         <Route path ="/home">
           <Home/>
         </Route>
         <Route path ="/login">
           <Login/>
         </Route>
         <Route path ="/dashboard/orders">
           <Orders/>
         </Route>
         <Route path ="/dashboard/service">
           <ServiceList />
         </Route>
         <Route path ="/dashboard/review">
           <AddReview />
         </Route>
         <Route path ="/dashboard/servicesAll">
           <ServicesAll />
         </Route>
         <Route path ="/dashboard/addService">
           <AddService />
         </Route>
         <Route exact path ="/">
           <Home/>
         </Route>
         <Route  path ="*">
           <NotFound/>
         </Route>
       </Switch>
     </Router>
    </DashBoadSidebar.Provider>
  );
}

export default App;
