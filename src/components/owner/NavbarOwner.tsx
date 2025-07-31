import { Link } from "react-router-dom"
import { assets, dummyUserData } from "../../assets/assets"

const NavbarOwner = () => {
  const user = dummyUserData

  return (
    <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-border-color relative transition-all">
      <div className="flex items-center gap-4">
        <Link to='/'>
          <img src={assets.logo} alt='Logo' className="h-7" />
        </Link>
        <p>Welcome, {user.name || 'Owner'}!</p>
      </div>
      <div className="flex items-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </div>
  )
}

export default NavbarOwner