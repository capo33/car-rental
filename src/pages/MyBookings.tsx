import React, { useEffect, useState } from 'react';
import { assets, dummyMyBookingsData, type DummyBooking } from '../assets/assets';
import Title from '../components/Title';

const MyBookings: React.FC = () => {
  const [bookings, setBookings] = useState<DummyBooking[]>([]);

  const currencySymbol = import.meta.env.VITE_CURRENCY || '$';

  const fetchBookings = async () => {
    setBookings(dummyMyBookingsData);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl mx-auto">
      <Title title="My Bookings" subTitle="View and manage your car rental bookings" align='left' />

      <div>
        {bookings.map((booking, index) => (
          <div key={booking._id} className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-border-color rounded mt-5 first:mt-12">
            {/* Car Image & Details */}
            <div className='md:col-span-1'>
              <div className='rounded overflow-hidden mb-3'>
                <img src={booking.car.image} alt={booking.car.model} className='w-full h-auto aspect-video object-cover' />
              </div>
              <p className='text-lg font-medium mt-2'>{booking.car.brand} {booking.car.model}</p>
              <p className='text-gray-500'>{booking.car.year} . {booking.car.category} . {booking.car.location}</p>
            </div>

            {/* Booking Details */}
            <div className='md:col-span-2'>
              <div className='flex items-center gap-2'>
                <p className='px-3 py-1.5 bg-light rounded'>Booking #{index + 1}</p>
                <p className={`px-3 py-1 text-sm rounded-full ${booking.status === 'confirmed' ? 'bg-green-400/15 text-green-600' : 'bg-red-400/15 text-red-600'}`}>{booking.status}</p>
              </div>

              <div className='flex items-start gap-2 mt-3'>
                <img src={assets.calendar_icon_colored} alt='Calendar Icon' className='w-4 h-4 mt-1' />
                <div >
                  <p className='text-gray-500'>Rental Period</p>
                  <p>{booking.pickupDate.split('T')[0]} TO {booking.returnDate.split('T')[0]}</p>
                </div>
              </div>

              <div className='flex items-start gap-2 mt-3'>
                <img src={assets.location_icon_colored} alt='Calendar Icon' className='w-4 h-4 mt-1' />
                <div >
                  <p className='text-gray-500'>Pick-up Location</p>
                  <p>{booking.car.location}</p>
                </div>
              </div>
            </div>

            {/* Price & Actions */}
            <div className='md:col-span-1 flex flex-col justify-between gap-6'>
              <div className='text-right text-sm text-gray-500'>
                <p>Total Price</p>
                <span className='text-3xl font-semibold text-primary'>{currencySymbol}{booking.price}</span>
                <p>Booked on {booking.createdAt.split('T')[0]}</p>
              </div>

              <button className='px-4 py-2 bg-primary hover:bg-primary-dull text-white rounded shadow'>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
