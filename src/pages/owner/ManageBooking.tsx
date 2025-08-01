import { useEffect, useState } from "react";
import { dummyMyBookingsData } from "../../assets/assets";
import Title from "../../components/owner/Title";

const ManageBooking = () => {
  const [bookings, setBookings] = useState<typeof dummyMyBookingsData>([]);
  const currencySymbol = import.meta.env.VITE_CURRENCY_SYMBOL || "$";

  console.log('bookings', bookings);

  const fetchOwnerBookings = async () => {
    setBookings(dummyMyBookingsData);
  };

  useEffect(() => {
    fetchOwnerBookings();
  }, []);

  return (
    <div className="px-4 pt-10 md:px-10 w-full">
      <Title title="Manage Bookings" subTitle="Track all customer bookings, approve or cancel requests and manage booking status" />

      <div className="max-w-3xl w-full rounded overflow-hidden border border-border-color mt-6">
        <table className="w-full text-left border-collapse text-sm text-gray-600">
          <thead className="texty-gray-500">
            <tr>
              <th className="p-3 font-medium">Car</th>
              <th className="p-3 font-medium max-md:hidden">Date Range</th>
              <th className="p-3 font-medium">Total</th>
              <th className="p-3 font-medium max-md:hidden">Payment</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id} className="border-t border-border-color text-gray-500">
                <td className="p-3 flex items-center gap-3">
                  <img src={booking.car.image} alt={booking.car.model} className="w-12 h-12 object-cover rounded aspect-square" />
                  <p className="font-medium max-md:hidden">{booking.car.brand} {booking.car.model}</p>
                </td>
                <td className="p-3 max-md:hidden">{booking.pickupDate.split("T")[0]} - {booking.returnDate.split("T")[0]}</td>
                <td className="p-3">{currencySymbol}{booking.price}</td>
                <td className="p-3 max-md:hidden">
                  <span className="bg-gray-100 px-3 py-1 rounded text-sm">
                    Offline
                  </span>
                </td>
                <td className="p-3">
                  {booking.status === "pending" ? (
                    <select value={booking.status} className="px-2 py-1.5 mt-1 rounded text-xs text-gray-500 outline-none font-semibold border border-border-color" onChange={(e) => console.log(`Status changed to: ${e.target.value}`)}>
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="canceled">Canceled</option>
                    </select>
                  ) : (
                    <span className={`px-3 py-1 rounded text-xs font-semibold ${booking.status === 'confirmed' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>{booking.status}</span>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageBooking