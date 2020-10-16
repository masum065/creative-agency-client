import React from 'react';
import { ReactComponent as OrderIcon } from '../../../../images/dashbord-icons/cart.svg'
import { ReactComponent as ServiceIcon } from '../../../../images/dashbord-icons/service.svg'
import { ReactComponent as ReviewIcon } from '../../../../images/dashbord-icons/review.svg'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DashBoadSidebar } from '../../../../App';



const UserSidebar = () => {

    const [activeBar , setActiveBar] = useContext(DashBoadSidebar)
    return (
            <PanelSidebar>
               <Link onClick={() => setActiveBar( {order: true})} to='/dashboard/order'>
                   <p className={activeBar.order && 'active'}>
                   <OrderIcon />Order</p>
                </Link>

                <Link onClick={() => setActiveBar( {order: '', review: '', service: true})} to='/dashboard/service'>
                   <p className={activeBar.service && 'active'}>
                    <ServiceIcon />Service list</p>
                </Link>

                <Link onClick={() => setActiveBar( {order: '', review: true, service: ''})} to='/dashboard/review'>
                    <p className={activeBar.review && 'active'}>
                    <ReviewIcon />Review</p>
                </Link>
            </PanelSidebar> 
           
    );
};

export const PanelSidebar = styled.div`

    margin-top: 50px;
    padding-left: 10px;
    font-size: 16px;
    font-weight: 600;
    color: #000;

    p {
        cursor: pointer;
        margin-bottom: 17px;
        color: #000;
        display: block;
        width: 100%;

        :focus svg path {
            fill: red !important;
        }
    }
    p.active {
        color: #009444;

        svg, svg path {
            fill: #009444;
        }
    }

     svg {
        width: 20px;
        height: 20px;
        margin-right: 7px;


        path {
            fill: #000;
        }
    }
`


export default UserSidebar;