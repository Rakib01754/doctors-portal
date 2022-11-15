import React from 'react';
import quotaion from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import ReviewCard from './ReviewCard/ReviewCard';

const Reviews = () => {
    const reviewsData = [
        {
            id: 1,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut animi temporibus beatae nostrum maxime sed obcaecati facere quis officia.',
            img: people1,
            name: 'Winson Herry',
            city: 'California'
        },
        {
            id: 2,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut animi temporibus beatae nostrum maxime sed obcaecati facere quis officia.',
            img: people2,
            name: 'Winson Herry',
            city: 'California'
        },
        {
            id: 3,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut animi temporibus beatae nostrum maxime sed obcaecati facere quis officia.',
            img: people3,
            name: 'Winson Herry',
            city: 'California'
        },
    ]
    return (
        <div className='mt-12 px-4'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-primary font-bold text-xl'>Testimonial</h4>
                    <h4 className='text-3xl'>What Our Patient Says</h4>
                </div>
                <img src={quotaion} alt="" className='w-24 md:w-48' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviewsData.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;