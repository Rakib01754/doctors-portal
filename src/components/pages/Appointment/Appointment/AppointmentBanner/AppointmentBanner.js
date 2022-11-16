import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import chair from '../../../../../assets/images/chair.png'

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='dentist chair' className="w-full md:w-1/2 rounded-lg shadow-2xl" />
                    <div className='mr-4'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;