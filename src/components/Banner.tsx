import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-center items-center justify-between px-8 min-md:pl-14 pt-10 h-64 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-3
    md:mx-auto rounded overflow-hidden'>
      <div className='text-white'>
        <h1 className='text-3xl md:text-4xl font-semibold'>Do you own a luxury car?</h1>
        <p className='mt-2'>Momentize your vehicle effortlessly by listing it on CarRental.</p>
        <p className='max-w-[130ch]'>We take care of insurance, driver verification and secure payments - so you can earn passive income, hassle-free.</p>
        <button className='mt-4 px-6 py-2 bg-white hover:bg-slate-100 text-primary rounded transition-all text-sm cursor-pointer'>
          List Your Car
        </button>
      </div>
      <img src={assets.banner_car_image} alt="Banner Car" className='max-h-44 mt-10' />
    </div>
  )
}

export default Banner