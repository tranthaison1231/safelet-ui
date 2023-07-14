import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import withAuth from '@/hocs/withAuth'

function PrivateLayout() {
  return (
    <div className="w-full">
      <Header />
      <div className="flex">
        <div className="w-1/5 px-6">
          <SideBar />
        </div>
        <div className="w-4/5 px-6 border-l-4 border-red-300">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default withAuth(PrivateLayout)
