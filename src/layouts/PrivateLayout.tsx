import { Outlet } from 'react-router-dom'
import SideBar from '@/components/SideBar'
import withAuth from '@/hocs/withAuth'

function PrivateLayout() {
  return (
    <div className="p-5">
      <SideBar />
      <Outlet />
    </div>
  )
}

export default withAuth(PrivateLayout)
