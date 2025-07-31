import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { assets, dummyUserData, ownerMenuLinks } from "../../assets/assets"

const Sidebar = () => {
  const location = useLocation()
  const [imageUrl, setImageUrl] = useState<string>('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const user = dummyUserData

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const newImageUrl = URL.createObjectURL(file)
      setSelectedFile(file)
      setImageUrl(newImageUrl)
    }
  }

  const updateImage = async () => {
    if (selectedFile && imageUrl) {
      // Here you would typically upload the file to your server
      // For now, we'll just update the user object with the preview URL
      user.image = imageUrl
      // Reset the selected file after saving
      setSelectedFile(null)
    }
  }

  return (
    <div className="relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-border-color text-sm">
      <div className="group relative">
        <label htmlFor="image">
          <img
            src={imageUrl || user?.image || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=300'}
            alt="User"
            className="h-25 md:h-32 w-25 md:w-32 rounded-full object-cover cursor-pointer mx-auto transition-all hover:scale-105"
          />
          <input type="file" id="image" accept="image/*" onChange={handleImageChange} hidden />

          <div className="absolute hidden top-0 right-0 bottom-0 left-0 bg-black/10 rounded-full group-hover:flex items-center justify-center cursor-pointer">
            <img src={assets.edit_icon} alt="Edit Icon" />
          </div>
        </label>
      </div>
      {selectedFile &&
        <button className="absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 border text-primary cursor-pointer" onClick={updateImage}>
          Save
          <img src={assets.check_icon} alt="Uploaded" width={13} />
        </button>
      }
      <p className="mt-2 text-base max-md:hidden">{user?.name}</p>

      <div className="w-full">
        {ownerMenuLinks.map((link, index) => (
          <NavLink key={index} to={link.path} className={`relative flex items-center gap-2 w-full py-3 pl-4 first:mt-6
          ${location.pathname === link.path ? 'bg-primary/10 text-primary' : 'text-gray-600'}`}>
            <img src={link.path === location.pathname ? link.coloredIcon : link.icon} alt='car icon' />
            <span className="max-md:hidden">{link.name}</span>
            <div className={`w-1.5 h-8 rounded right-0 absolute ${location.pathname === link.path && 'bg-primary'}`}></div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Sidebar

  