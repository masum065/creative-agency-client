import React from 'react';
import Services from '../../Services/Services';
import Brand from '../Brand/Brand';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Works from '../Works/Works';

const Home = () => {
    return (
        <>
            <Header />
            <Brand/>
            <Services/>
            <Works/>
            <FeedBack/>
            <Footer/>
        </>
    );
};



export default Home;