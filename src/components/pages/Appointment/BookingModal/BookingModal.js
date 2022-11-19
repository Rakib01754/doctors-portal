import { format } from 'date-fns/esm';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { user } = useContext(AuthContext)
    const { name, slots } = treatment
    const date = format(selectedDate, 'PP')

    const handleBooking = (e) => {
        e.preventDefault()
        const form = e.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const bookingDetails = {
            appointmentDate: date,
            name,
            patientName,
            slot,
            email,
            phone
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('Booking Successfull')
                    form.reset()
                    refetch();
                }
                else {
                    setTreatment(null)
                    toast.error(data.message)
                }
            })
            .catch(error => {
                toast.warning(error.message)
            })


    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-4">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {slots.map((slot, idx) => <option key={idx} value={slot}>{slot}</option>)}
                        </select>
                        <input name='email' type="email" defaultValue={user?.email} disabled className="input input-bordered w-full" required />
                        <input type="text" name='name' defaultValue={user?.displayName} disabled className="input input-bordered w-full" required />
                        <input type="number" name='phone' placeholder="Your Phone" className="input input-bordered w-full" required />
                        <br />
                        <button type='submit' className='btn btn-neutral font-bold text-white'>Submit</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;