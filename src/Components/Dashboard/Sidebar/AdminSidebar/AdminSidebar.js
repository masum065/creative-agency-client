import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DashBoadSidebar } from '../../../../App';
import { PanelSidebar } from '../UserSidebar/UserSidebar';
import { ReactComponent as ServiceIcon } from '../../../../images/dashbord-icons/service.svg';
import {ReactComponent as PlusIcon} from '../../../../images/dashbord-icons/plus.svg';
import { ReactComponent as PplPlusIcon } from '../../../../images/dashbord-icons/pplPlus.svg';

const AdminSidebar = () => {
    
    const [activeBar , setActiveBar] = useContext(DashBoadSidebar)
    return (
            <PanelSidebar>

                <Link onClick={() => setActiveBar( {addService: '', makeAdmin: '', serviceAll: true})} to='/dashboard/servicesAll'>
                   <p className={activeBar.serviceAll && 'active'}>
                    <ServiceIcon/>Service list</p>
                </Link>

                <Link onClick={() => setActiveBar( {addService: true, makeAdmin: '', serviceAll:''})} to='/dashboard/addService'>
                   <p className={activeBar.addService && 'active'}>
                   <PlusIcon/>Add Service</p>
                </Link>

                <Link onClick={() => setActiveBar( {addService: '', makeAdmin: true, serviceAll: ''})} to='/dashboard/makeAdmin'>
                    <p className={activeBar.makeAdmin && 'active'}>
                    <PplPlusIcon/>Make Admin</p>
                </Link>
            </PanelSidebar> 
           
    );
};

export default AdminSidebar;