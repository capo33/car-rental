import { useEffect, useState } from "react";
import { assets, dummyCarData } from "../../assets/assets";
import Title from "../../components/owner/Title";

const ManageCars = () => {
  const [cars, setCars] = useState<typeof dummyCarData>([]);

  const currencySymbol = import.meta.env.VITE_CURRENCY_SYMBOL || "$";

  const fetchOwnedCars = async () => {
    setCars(dummyCarData);
  };

  useEffect(() => {
    fetchOwnedCars();
  }, []);


  return (
    <div className="px-4 pt-10 md:px-10 w-full">
      <Title title="Manage Cars" subTitle="View and manage the cars you have listed for booking. You can edit or remove them as needed." />

      <div className="max-w-3xl w-full rounded overflow-hidden border border-border-color mt-6">
        <table className="w-full text-left border-collapse text-sm text-gray-600">
          <thead className="texty-gray-500">
            <tr>
              <th className="p-3 font-medium">Car Model</th>
              <th className="p-3 font-medium max-md:hidden">Category</th>
              <th className="p-3 font-medium">Price</th>
              <th className="p-3 font-medium max-md:hidden">Status</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car._id} className="border-t border-border-color">
                <td className="p-3 flex items-center gap-3">
                  <img src={car.image} alt={car.model} className="w-12 h-12 object-cover rounded aspect-square" />
                  <div className="max-md:hidden">
                    <h3 className="font-medium">{car.brand} {car.model}</h3>
                    <p className="text-sm text-gray-500">{car.seating_capacity} . {car.transmission}</p>
                  </div>
                </td>
                <td className="p-3 max-md:hidden">{car.category}</td>
                <td className="p-3">{currencySymbol}{car.pricePerDay}/day</td>
                <td className="p-3 max-md:hidden">
                  <span className={`px-2 py-1 rounded ${car.isAvailable ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {car.isAvailable ? 'Available' : 'Not Available'}
                  </span>
                </td>

                <td className="p-3 flex items-center">
                  <img src={car.isAvailable ? assets.eye_close_icon : assets.eye_icon} alt="eye icon" />
                  <img src={assets.delete_icon} alt="delete icon" className="cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageCars 