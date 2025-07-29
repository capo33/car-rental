import { Link, useLocation, useNavigate } from 'react-router-dom'
import { assets, menuLinks } from '../assets/assets'
import { useState } from 'react'

interface HeaderProps {
  setShowLogin: (show: boolean) => void;
}

const Header = ({ setShowLogin }: HeaderProps) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)


  return (
    <div className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600' border-b border-border-color relative transition-all 
    ${location.pathname === '/' && 'bg-light'}`}>
      <Link to="/">
        <img src={assets.logo} alt="logo" className='h-8' />
      </Link>

      <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-border-color right-0 flex flex-col sm:flex-row items-start sm:items-center
        gap-4 sm:gap-4 max-sm:p-4 transition-all duration-300 z-50 ${location.pathname === '/' ? 'bg-light' : 'bg-white'} 
        ${open ? 'max-sm:translate-x-0' : 'max-sm:-translate-x-full'}`}>
        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path} className="mx-2">{link.name}</Link>
        ))}

        {/* Search Bar */}
        <div className='hidden lg:flex items-center gap-2 text-sm border border-border-color px-3 rounded msx-w-56'>
          <input
            type="text"
            placeholder="Search..."
            className=" rounded py-1.5 w-full bg-transparent outline-none placeholder-gray-500 transition-colors duration-200"
          />
          <img src={assets.search_icon} alt="search" className='h-6' />
        </div>

        {/* Toggle Button */}
        <div className='flex max-sm:flex-col items-center sm-items-center gap-6'>
          <button onClick={() => navigate('/owner')} className='cursor-pointer'>Dashboard</button>
          <button onClick={() => setShowLogin(true)} className='cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded'>Login</button>
        </div>

      </div>

      {/* Hamburger Icon */}
      <button className='sm:hidden cursor-pointer' aria-label="Toggle Menu" onClick={() => setOpen(!open)}>
        <img
          src={open ? assets.close_icon : assets.menu_icon}
          alt="menu"
          className='h-6 cursor-pointer'
        />
        {/* <img
          src={assets.search_icon}
          alt="search"
          className='h-6 cursor-pointer'
          onClick={() => navigate('/search')}
        />
        <div className={`sm:hidden fixed top-16 right-0 w-64 bg-white border border-border-color shadow-lg transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-4">
            {menuLinks.map((link, index) => (
              <Link key={index} to={link.path} className="block py-2 text-sm">{link.name}</Link>
            ))}
          </div>
        </div> */}
      </button>
    </div>
  )
}

export default Header