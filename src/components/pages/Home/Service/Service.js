import React from 'react';

const Service = ({ service }) => {
    const { title, desc, icon } = service
    return (
        <div className="card bg-base-100 shadow-lg">
            <figure className="px-10 pt-10">
                <img src={icon} alt="icon" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default Service;