import React, { useState } from 'react';
import Title from '../components/Title';
import CarCard from '../components/CarCard';
import { assets, dummyCarData } from '../assets/assets';

const Cars: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <div className="flex flex-col items-center py-20 bg-light max-md:px-4">
        <Title title='Available Cars' subTitle='Browse our selection of premium vehicles for your next adventure' align='start' />

        <div className="flex items-center bg-white shadow rounded w-full h-12 px-4 mt-6 max-w-140">
          <img src={assets.search_icon} alt="Search Icon" className='w-4 h-4 mr-2' />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by make, model, or features"
            className="w-full h-full outline-none text-sm text-gray-500"
          />
          <img src={assets.filter_icon} alt="Filter Icon" className='w-4 h-4 ml-2' />
        </div>
      </div>

      <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-10'>
        <p className='text-gray-600 xl:px-20 max-w-7xl mx-auto'>Showing {dummyCarData.length} Cars</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto'>
          {dummyCarData.map((car) => (
            <div key={car._id} className=' '>
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
