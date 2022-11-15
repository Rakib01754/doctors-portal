import React from 'react';

const ShortSingle = ({ singleDetail }) => {
    const { title, desc, img, bgColor } = singleDetail
    return (
        <div className={`card card-side ${bgColor} shadow-xl text-white p-4 flex flex-col md:flex-row`}>
            <img src={img} alt="Movie" className='w-16 mx-auto mt-2 md:mt-0' />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default ShortSingle;