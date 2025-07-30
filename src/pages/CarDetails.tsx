import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { assets, dummyCarData, type DummyCar } from '../assets/assets';
import Loader from '../components/Loader';

const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [carDetails, setCarDetails] = useState<DummyCar | null>(null);

  const currencySymbol = import.meta.env.VITE_CURRENCY || '$';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Booking submitted');
  };

  React.useEffect(() => {
    setCarDetails(dummyCarData.find(car => car._id === id) || null)
  }, [id]);

  return carDetails ? (
    <div className="px-                                             6 md:px-16 lg:px-24 xl:px-32 mt-16">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer">
        <img src={assets.arrow_icon} alt="Back" className='rotate-180 opacity-65' /> Back to all cars
      </button>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
        {/* Car Image & Details */}
        <div className='lg:col-span-2'>
          <img src={carDetails.image} alt={carDetails.model} className='w-full h-auto md:max-h-100 object-cover rounded mb-6 shadow-md' />
          <div className='space-y-6'>
            <div>
              <h1 className='text-3xl font-bold'>{carDetails.brand} {carDetails.model}</h1>
              <p className='text-lg text-gray-500'>${carDetails.category} . {carDetails.year}</p>
            </div>

            <hr className='border-border-color my-6' />

            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
              {[
                { icon: assets.users_icon, text: `${carDetails.seating_capacity} Seats` },
                { icon: assets.fuel_icon, text: `${carDetails.fuel_type}` },
                { icon: assets.car_icon, text: `${carDetails.transmission}` },
                { icon: assets.location_icon, text: `${carDetails.location}` },
              ].map(({ icon, text }) => (
                <div key={text} className='flex flex-col items-center bg-light p-4 rounded'>
                  <img src={icon} alt={text} className='w-5 h-5' />
                  <span className='text-sm text-gray-500'>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className='mt-8'>
            <h1 className='text-lg font-medium mb-3'>Description</h1>
            <p className='text-gray-500'>{carDetails.description}</p>
          </div>

          {/* Features */}
          <div className='mt-8'>
            <h1 className='text-lg font-medium mb-3'>Features</h1>
            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
              {['360 Camera', 'Bluetooth', 'Navigation System', 'Sunroof', 'Leather Seats', 'GPS'].map((item) => (
                <li key={item} className='flex items-center text-gray-500'>
                  <img src={assets.check_icon} alt="check" className='mr-2 h-4' />
                  <span className='text-gray-500'>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Booking Form - Sticky Sidebar */}
        <div className='lg:col-span-1'>
          <div className='sticky top-16'>
            <form className='shadow-lg rounded p-6 space-y-6 text-gray-500 bg-white border' onSubmit={handleSubmit}>
              <p className='flex items-center justify-between text-2xl text-gray-800 font-semibold'>{currencySymbol}{carDetails.pricePerDay}
                <span className='text-base text-gray-500 font-normal'>per day</span>
              </p>

              <hr className='border-border-color my-6' />

              {/* Add more booking form content here */}
              <div className='flex flex-col gap-2'>
                <label htmlFor='pickup-date' className='block text-sm font-medium text-gray-700 mb-2'>Pick-up Date</label>
                <input type='date' id='pickup-date' className='border border-border-color rounded px-3 py-2' required min={new Date().toISOString().split("T")[0]} />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='return-date' className='block text-sm font-medium text-gray-700 mb-2'>Return Date</label>
                <input type='date' id='return-date' className='border border-border-color rounded px-3 py-2' required />
              </div>

              <button type='submit' className='w-full bg-primary text-white py-3 rounded font-medium hover:bg-primary-dull transition-all'>
                Book Now
              </button>

              <p className='text-sm text-center'>No credit card required to reserve.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default CarDetails;
