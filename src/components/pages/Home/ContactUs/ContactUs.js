import React from 'react';
import contactBg from '../../../../assets/images/appointment.png'
const ContactUs = () => {
    return (
        <div className='mt-12' style={{ background: `url(${contactBg})` }}>
            <div className='w-[75%] mx-auto text-center py-12'>
                <div className=''>
                    <h3 className='text-primary font-bold text-xl'>Contact Us</h3>
                    <h1 className='text-3xl text-white'>Stay connected with us</h1>
                </div>
                <div className='w-full md:w-[50%] mx-auto flex flex-col mt-5 gap-2'>
                    <input className='p-2' type="email" placeholder='Your Email' name="" id="" />
                    <input className='p-2' type="text" placeholder='Subject' name="" id="" />
                    <textarea className='p-2' placeholder='Type Your Message' name="message" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;