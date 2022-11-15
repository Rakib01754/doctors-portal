import React from 'react';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import ShortDetails from './ShortDetails/ShortDetails';
import ShortIntro from './ShortIntro/ShortIntro';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <ShortDetails></ShortDetails>
            <Services></Services>
            <ShortIntro></ShortIntro>
            <MakeAppointment></MakeAppointment>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;