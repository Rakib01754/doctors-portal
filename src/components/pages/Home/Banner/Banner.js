import React from 'react';
import chair from '../../../../assets/images/chair.png'
import bgImg from '../../../../assets/images/bg.png'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bgImg})` }} className="hero py-20">
            <div className="hero-content flex-col lg:flex-row-reverse p-5">
                <img src={chair} alt='chair' className="rounded-lg shadow-2xl w-full lg:w-1/2" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white border-none">Get Started</button>

                </div>
            </div>
        </div>

    );
};

export default Banner;