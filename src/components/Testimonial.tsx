import { assets } from "../assets/assets";
import Title from "./Title";

const Testimonial = () => {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      image: assets.testimonial_image_1,
      testimonial: "I've rented cars from various companies, but the experience with CarRental was exceptional!"
    },
    {
      id: 2,
      name: "Liam Johnson",
      location: "New York, USA",
      image: assets.testimonial_image_2,
      testimonial: "CarRental made my trip so much easier. The car was delivered right to my hotel, and the customer service was top-notch!"
    },
    {
      id: 3,
      name: "Sophia Lee",
      location: "Seoul, South Korea",
      image: assets.testimonial_image_1,
      testimonial: "I highly recommend CarRental! The process was seamless, and the car was in excellent condition."
    }
  ];




  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
      <Title title="What Our Customer Say" subTitle="Discover why discerning travelers choose StayVenture for their luxury accommodations around the world" align="start" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
      {/* <div className="grid grid-col-1 md:grid-col-2 lg:grid-col-3 grid-col-1 sm:grid-col-2 lg:grid-col-3 gap-8 mt-18"> */}
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3">
              <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
              <div>
                <p className="text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {Array(5).fill(0).map((_, index) => (
                <img src={assets.star_icon} alt="star-icon" key={index} className="" />
              ))}
            </div>
            <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial

