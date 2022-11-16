import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppoinments = ({ selectedDate }) => {

    const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))

    }, [])
    return (
        <section className=' mt-16'>
            <p className='text-center font-bold text-secondary'>Available Appointments On {format(selectedDate, 'PP')}.</p>
            <div className='grid grid-cols-1 md:grid-cols=2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOption key={appointmentOption._id} appointmentOption={appointmentOption} setTreatment={setTreatment}></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    setTreatment={setTreatment}
                    selectedDate={selectedDate}
                    treatment={treatment}></BookingModal>
            }
        </section>


    );
};

export default AvailableAppoinments;