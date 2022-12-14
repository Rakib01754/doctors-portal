import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="font-bold textg-2xl text-center">{name}</h2>
                <p>
                    {
                        slots.length > 0 ? slots[0] : 'Try Another Day'
                    }
                </p>
                <p>
                    {slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available
                </p>
                <div className="card-actions justify-center">
                    <label
                        onClick={() => { setTreatment(appointmentOption) }}
                        htmlFor="booking-modal" className={slots.length === 0 ? 'btn btn-primary text-white disabled' : 'btn btn-primary text-white'}>Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;