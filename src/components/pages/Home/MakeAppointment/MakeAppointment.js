import React from 'react';
import doctor from '../../../../assets/images/doctor.png'
import appoiment from '../../../../assets/images/appointment.png'
import PrimaryButton from '../../../PrimaryButton/PrimaryButton';


const MakeAppointment = () => {
    return (
        <div className="hero" style={{ background: `url(${appoiment})` }}>
            <div className="hero-content flex-col lg:flex-row text-white">
                <img src={doctor} alt='' className="md:w-1/2 rounded-lg -mt-36 hidden lg:block" />
                <div>
                    <h4 className='text-primary font-bold text-xl mb-2'>Appointment</h4>
                    <h1 className="text-3xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;