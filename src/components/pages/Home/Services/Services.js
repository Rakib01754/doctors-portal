import React from 'react';
import flouride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import whitening from '../../../../assets/images/whitening.png'
import Service from '../Service/Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia commodi quam officiis nulla?',
            icon: flouride
        },
        {
            id: 2,
            title: 'Cavity Filling',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia commodi quam officiis nulla?',
            icon: cavity
        },
        {
            id: 3,
            title: 'Teeth Whitening',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia commodi quam officiis nulla?',
            icon: whitening
        }
    ]

    return (
        <div className='text-center my-12'>
            <h4 className='text-primary font-bold text-xl'>Our Services</h4>
            <h4 className='text-3xl'>Services We Provide</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    servicesData.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;