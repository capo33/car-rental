import { useState } from "react";
import Title from "../../components/owner/Title";
import { assets } from "../../assets/assets";

const AddCar = () => {

  const [image, setImage] = useState<File | null>(null);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: 0,
    pricePerDay: 0,
    category: "",
    transmission: "",
    fuel_type: "",
    seating_capacity: 0,
    location: "",
    description: "",
  });

  const currencySymbol = import.meta.env.VITE_CURRENCY_SYMBOL || "$";

  return (
    <div className="px-4 pt-10 md:px-10 flex flex-col">
      <Title title="Add Car" subTitle="Fill in the details to list a new car for booking, including pricing and availability, and car specifications." />

      <form className="flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl">
        {/* Car Image */}
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="car-image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              className="h-16 rounded cursor-pointer"
              alt="Car Upload"
            />
            <input type="file" id="car-image" accept="image/*" onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)} hidden />
          </label>
          <p className="text-sm text-gray-500">Upload a picture of your car</p>
        </div>

        {/* Car Brand & Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col w-full">
            <label>Brand</label>
            <input
              required
              type="text"
              placeholder="e.g. Toyota, Honda, Ford..."
              value={car.brand} onChange={(e) => setCar({ ...car, brand: e.target.value })}
              className="px-3 py-2 mt-1 border border-border-color rounded outline-none"
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Model</label>
            <input
              required
              type="text"
              placeholder="e.g. Camry, Civic, Focus..."
              value={car.model} onChange={(e) => setCar({ ...car, model: e.target.value })}
              className="px-3 py-2 mt-1 border border-border-color rounded outline-none"
            />
          </div>
        </div>

        {/* Car Year & Price Per Day */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label>Year</label>
            <input
              required
              type="number"
              placeholder="e.g. 2020, 2021, 2022..."
              value={car.year} onChange={(e) => setCar({ ...car, year: Number(e.target.value) })}
              className="px-3 py-2 mt-1 border border-border-color rounded outline-none"
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Daily Price ({currencySymbol}) </label>
            <input
              required
              type="number"
              placeholder="e.g. 50, 75, 100..."
              value={car.pricePerDay} onChange={(e) => setCar({ ...car, pricePerDay: Number(e.target.value) })}
              className="px-3 py-2 mt-1 border border-border-color rounded outline-none"
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Category</label>
            <select value={car.category} onChange={(e) => setCar({ ...car, category: e.target.value })} className="px-3 py-2 mt-1 border border-border-color rounded outline-none">
              <option value="">Select a category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Van">Van</option>
              <option value="Coupe">Coupe</option>
            </select>
          </div>
        </div>

        {/* Transmission & Fuel Type & Seating Capacity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label>Transmission</label>
            <select value={car.transmission} onChange={(e) => setCar({ ...car, transmission: e.target.value })} className="px-3 py-2 mt-1 border border-border-color rounded outline-none">
              <option value="">Select a transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label>Fuel Type</label>
            <select value={car.fuel_type} onChange={(e) => setCar({ ...car, fuel_type: e.target.value })} className="px-3 py-2 mt-1 border border-border-color rounded outline-none">
              <option value="">Select a fuel type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label>Seating Capacity</label>
            <input
              required
              type="number"
              placeholder="e.g. 4, 5, 7..."
              value={car.seating_capacity} onChange={(e) => setCar({ ...car, seating_capacity: Number(e.target.value) })}
              className="px-3 py-2 mt-1 border border-border-color rounded outline-none"
            />
          </div>
        </div>

        {/* Car Location */}
        <div className="flex flex-col w-full">
          <label>Location</label>
          <select value={car.location} onChange={(e) => setCar({ ...car, location: e.target.value })} className="px-3 py-2 mt-1 border border-border-color rounded outline-none">
            <option value="">Select a location</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Houston">Houston</option>
            <option value="Suburbs">Suburbs</option>
          </select>
        </div>

        {/* Description */}
        <div className="flex flex-col w-full">
          <label>Description</label>
          <textarea
            required
            rows={4}
            placeholder="Provide a detailed description of the car..."
            value={car.description} onChange={(e) => setCar({ ...car, description: e.target.value })}
            className="px-3 py-2 mt-1 border border-border-color rounded outline-none"
          />
        </div>

        <button type="submit" className="mt-6 bg-blue-500 text-white py-2 px-4 rounded">
          <img src={assets.tick_icon} alt="Submit" /> List Your Car
        </button>
      </form>
    </div>
  )
}

export default AddCar