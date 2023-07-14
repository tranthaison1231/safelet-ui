import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '@/assets/images/logo.png'
import { ReactComponent as ButtonIcon } from '@/assets/svgs/button.svg'
import { ReactComponent as UserIcon } from '@/assets/svgs/user.svg'
import { removeToken } from '@/utils/token'

export default function Header() {
  const navigate = useNavigate()
  const handleLogout = () => {
    removeToken()
    navigate('/login')
  }

  return (
    <div className="flex items-center justify-between p-6">
      {React.createElement(ButtonIcon, {
        className: ' cursor-pointer'
      })}
      <img alt="" className="w-40 h-12" src={logo} />
      <div className="relative flex items-center h-12 gap-2 py-2 pl-4 pr-2 bg-black cursor-pointer rounded-3xl group ">
        <span className="text-white ">Safalet</span>
        <UserIcon />
        <div className="absolute right-0 min-w-[250px] border border-gray-200 rounded-md shadow-md top-full dropdown p-2 hidden group-hover:flex flex-col bg-white z-999">
          <button className="px-4 py-2 rounded-md hover:bg-primary hover:text-white " type="button">
            Profile
          </button>
          <button
            className="px-4 py-2 rounded-md hover:bg-primary hover:text-white "
            onClick={handleLogout}
            type="button"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
