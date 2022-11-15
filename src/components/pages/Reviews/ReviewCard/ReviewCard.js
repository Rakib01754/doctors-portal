import React from 'react';

const ReviewCard = ({ review }) => {
    const { img, name, city, desc } = review
    return (
        <div className="card shadow-lg">
            <div className="card-body items-center text-left">
                <p className=''>{desc}</p>
                <div className="card-actions justify-end">
                    <img src={img} alt="" />
                    <div className='flex flex-col'>
                        <p className='font-bold text-xl'>{name}</p>
                        <p>{city}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;