import Title from './Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCard from './CarCard'
import { useNavigate } from 'react-router-dom';

const FeatureSection = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>

      <div className=''>
        <div className='bg-white p-6 rounded-lg shadow-md text-center'>
          <Title title="Featured Vehicles" subTitle="Explore our selection of premium vehicles available for your next adventure." align="center" />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
          {dummyCarData.map((car, index) => (
            <div key={index} className=''>
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
      <button
        className='flex items-center justify-center gap-2 px-6 py-3 border border-border-color hover:bg-gray-50 rounded cursor-pointer'
        onClick={() => {
          navigate('/cars');
          scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        View All Cars
        <img src={assets.arrow_icon} alt="arrow" />
      </button>

    </div>
  )
}

export default FeatureSection