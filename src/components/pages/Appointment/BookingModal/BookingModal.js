import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment
    const date = format(selectedDate, 'PP')

    const handleBooking = (e) => {
        e.preventDefault()
        const form = e.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const bookDetails = {
            appointmentDate: date,
            name,
            patientName,
            slot,
            email,
            phone

        }
        console.log(bookDetails)
        form.reset()
        setTreatment(null)

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
                        <input name='email' type="email" placeholder="Your Email" className="input input-bordered w-full" required />
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full" required />
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