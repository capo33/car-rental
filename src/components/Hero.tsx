import { useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState('')
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>
      <h1 className='text-4xl md:text-5xl font-semibold'>Welcome to Our Car Rental Service</h1>
      <form className='flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8'>
          <div className='flex flex-col items-start gap-2'>
            <select
              required
              className="outline-none"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              {cityList.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <p className='px-1 text-sm text-gray-500'>{pickupLocation ? pickupLocation : 'Please select a location'}</p>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <label htmlFor="pickupDate">Pickup Date</label>
            <input
              required
              type="date"
              id="pickupDate"
              className="outline-none text-sm text-gray-500"
              min={new Date().toISOString().split("T")[0]} // Ensures the date is not in the past
            />
          </div>
          <div className='flex flex-col items-start gap-2'>
            <label htmlFor="returnDate">Return Date</label>
            <input
              required
              type="date"
              id="returnDate"
              className="outline-none text-sm text-gray-500"
            />
          </div>
        </div>
        <button type="submit" className="flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded cursor-pointer">
          <img src={assets.search_icon} alt="Search" className='brightness-200' /> Search
        </button>
      </form>
      <img src={assets.main_car} alt="car" className='max-h-72' />
    </div>
  )
}

export default Hero