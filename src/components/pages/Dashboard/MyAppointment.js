import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    const { data: bookings, isLoading, refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('access-token')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })
    if (bookings) {
        return (
            <div>
                <h1 className="text-3xl font-bold mb-4">My Appointments</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Treatment</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                bookings.map((booking, idx) =>
                                    <tr key={idx}>
                                        <th>{idx + 1}</th>
                                        <td>{booking.patientName}</td>
                                        <td>{booking.name}</td>
                                        <td>{booking.appointmentDate}</td>
                                        <td>{booking.slot}</td>
                                    </tr>

                                )
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

};

export default MyAppointment;