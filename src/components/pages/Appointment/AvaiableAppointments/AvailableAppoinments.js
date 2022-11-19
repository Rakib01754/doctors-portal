import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Spinner from '../../Spinner/Spinner';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppoinments = ({ selectedDate }) => {
    const date = format(selectedDate, 'PP')
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: [' appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json()
            return data;
        }
    })
    const [treatment, setTreatment] = useState(null)

    if (isLoading) {
        return <Spinner></Spinner>
    }


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
                    refetch={refetch}
                    treatment={treatment}></BookingModal>
            }
        </section>


    );
};

export default AvailableAppoinments;