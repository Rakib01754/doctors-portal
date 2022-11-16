import React, { useState } from 'react';
import AvailableAppoinments from '../AvaiableAppointments/AvailableAppoinments';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div className='my-16 mx-4'>
            <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentBanner>
            <AvailableAppoinments selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AvailableAppoinments>
        </div>
    );
};

export default Appointment;