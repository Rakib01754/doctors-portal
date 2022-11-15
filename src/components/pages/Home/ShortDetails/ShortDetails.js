import React from 'react';
import clock from '../../../../assets/icons/clock.svg'
import marker from '../../../../assets/icons/marker.svg'
import phone from '../../../../assets/icons/phone.svg'
import ShortSingle from './ShortSingle/ShortSingle';

const ShortDetails = () => {
    const InfoDetails = [
        {
            id: 1,
            title: 'Opening Hours',
            desc: 'Open 9:00 Am to 5:00 Pm Everyday',
            img: clock,
            bgColor: 'bg-gradient-to-r from-primary to-secondary'

        },
        {
            id: 2,
            title: 'Visit our location',
            desc: 'Brooklyn, NY 10036, United States',
            img: marker,
            bgColor: 'bg-neutral'
        },
        {
            id: 3,
            title: 'Contact us now',
            desc: '+000 123 456789',
            img: phone,
            bgColor: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                InfoDetails.map(singleDetail => <ShortSingle key={singleDetail.id} singleDetail={singleDetail}></ShortSingle>)
            }
        </div>
    );
};

export default ShortDetails;