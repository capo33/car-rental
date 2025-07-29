import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { lazy } from 'react';
import App from '../App';

// Lazy load pages for code splitting
const Home = lazy(() => import('../pages/Home'));
const Cars = lazy(() => import('../pages/Cars'));
const CarDetails = lazy(() => import('../pages/CarDetails'));
const Booking = lazy(() => import('../pages/Booking'));
const MyBookings = lazy(() => import('../pages/MyBookings'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Public Routes */}
      <Route index element={<Home />} />
      <Route path="cars" element={<Cars />} />
      <Route path="car-details/:id" element={<CarDetails />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      
      {/* Authentication Routes */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      
      {/* Protected Routes (you can add authentication guards later) */}
      <Route path="booking" element={<Booking />} />
      <Route path="booking/:carId" element={<Booking />} />
      <Route path="my-bookings" element={<MyBookings />} />
      
      {/* 404 Route - must be last */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default routes;
