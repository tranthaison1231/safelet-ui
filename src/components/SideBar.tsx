import { Link, useLocation } from 'react-router-dom'
import DashboardIcon from '@/assets/svgs/dashboard.svg'
import HomeIcon from '@/assets/svgs/home.svg'
import ShieldIcon from '@/assets/svgs/shield.svg'
import UserShieldIcon from '@/assets/svgs/user-shield.svg'
import { cn } from '@/utils/cn'

function SideBar() {
  const { pathname } = useLocation()
  const SIDE_BAR = [
    {
      icon: {
        id: 'dashboard',
        url: DashboardIcon
      },
      path: '/',
      title: 'Dashboard'
    },
    {
      icon: {
        id: 'home',
        url: HomeIcon
      },
      path: '/user-app-installed',
      title: 'User App Installed'
    },
    {
      icon: {
        id: 'shield',
        url: ShieldIcon
      },
      path: '/user-have-guardian',
      title: 'User have guardian'
    },
    {
      icon: {
        id: 'user-shield',
        url: UserShieldIcon
      },
      path: '/user-guardian',
      title: 'Number of guardian'
    },
    {
      icon: {
        id: 'user-shield',
        url: UserShieldIcon
      },
      path: '/user-connect-safe',
      title: 'User connect safe'
    },
    {
      icon: {
        id: 'user-shield',
        url: UserShieldIcon
      },
      path: '/user-connect-safe',
      title: 'Send out alarm'
    },
    {
      icon: {
        id: 'user-shield',
        url: UserShieldIcon
      },
      path: '/user-connect-safe',
      title: 'Received alarm'
    },
    {
      icon: {
        id: 'user-shield',
        url: UserShieldIcon
      },
      path: '/user-connect-safe',
      title: 'User per country'
    }
  ]
  return (
    <div className="rounded-2xl p-4 bg-neutral-200 w-1/5">
      {SIDE_BAR.map(item => (
        <Link
          className={cn('p-2.5 flex', {
            'bg-red-500 text-white rounded-lg ': item.path === pathname
          })}
          key={item.title}
          to={item.path}
        >
          <svg className="w-5 h-5 mr-2.5">
            <use
              className={cn({
                'text-white': item.path === pathname
              })}
              href={`${item.icon.url}#${item.icon.id}`}
            />
          </svg>
          {item.title}
        </Link>
      ))}
    </div>
  )
}

export default SideBar
