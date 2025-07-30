import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets"

interface CarCardProps {
  car: {
    _id: string;
    brand: string;
    model: string;
    year: number;
    category: string;
    image: string;
    pricePerDay: number;
    seating_capacity: number;
    fuel_type: string;
    transmission: string;
    isAvailable: boolean;
  };
}

const CarCard = ({ car }: CarCardProps) => {
  const currencySymbol = import.meta.env.VITE_CURRENCY || '$';
  const navigate = useNavigate();

  return (
    <div
      className='group rounded overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer'
      onClick={() => {
        navigate(`/car-details/${car._id}`);
        scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={car.image} alt="Car" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />

        {!car.isAvailable && <p className='absolute top-4 left-2 bg-primary/80 text-white text-sm px-2.5 py-1 rounded-full'>Available</p>}

        <div className='absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-lg'>
          <span className='text-white font-semibold'>{currencySymbol}{car.pricePerDay}</span>
          <span className='text-white/80 text-sm'>/ day</span>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className='flex items-start justify-between mb-2'>
          <div>
            <h3 className='text-lg font-medium'>{car.brand} {car.model}</h3>
            <p className='text-sm text-muted-foreground'>{car.category} {car.year}</p>
          </div>
        </div>

        <div className='mt-4 grid grid-cols-2 gap-y-2 text-gray-600'>
          <div className='flex items-center text-sm text-muted-foreground gap-2'>
            <img src={assets.users_icon} alt="Seats" className='mr-2 h-4' />
            <span>{car.seating_capacity} Seats</span>
          </div>
          <div className='flex items-center text-sm text-muted-foreground gap-2'>
            <img src={assets.fuel_icon} alt="Fuel" className='mr-2 h-4' />
            <span>{car.fuel_type}</span>
          </div>
          <div className='flex items-center text-sm text-muted-foreground gap-2'>
            <img src={assets.car_icon} alt="Transmission" className='mr-2 h-4' />
            <span>{car.transmission}</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CarCard