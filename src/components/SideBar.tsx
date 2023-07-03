import { createElement } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ReactComponent as ActivityIcon } from '@/assets/svgs/activity.svg'
import { ReactComponent as CountryIcon } from '@/assets/svgs/country.svg'
import { ReactComponent as DashboardIcon } from '@/assets/svgs/dashboard.svg'
import { ReactComponent as HomeIcon } from '@/assets/svgs/home.svg'
import { ReactComponent as ReceivedAlarmIcon } from '@/assets/svgs/received-alarm..svg'
import { ReactComponent as SendAlarmIcon } from '@/assets/svgs/send-alarm.svg'
import { ReactComponent as ShieldIcon } from '@/assets/svgs/shield.svg'
import { ReactComponent as UserSafeIcon } from '@/assets/svgs/user-safe.svg'
import { ReactComponent as UserShieldIcon } from '@/assets/svgs/user-shield.svg'
import { cn } from '@/utils/cn'

function SideBar() {
  const { pathname } = useLocation()
  const SIDE_BAR = [
    {
      icon: DashboardIcon,
      path: '/',
      title: 'Dashboard'
    },
    {
      icon: HomeIcon,
      path: '/user-app-installed',
      title: 'User App Installed'
    },
    {
      icon: ShieldIcon,

      path: '/user-have-guardian',
      title: 'User have guardian'
    },
    {
      icon: UserShieldIcon,
      path: '/user-guardian',
      title: 'Number of guardian'
    },
    {
      icon: UserSafeIcon,
      path: '/user-connect-safe',
      title: 'User connect safe'
    },
    {
      icon: ActivityIcon,
      path: '/user-activity',
      title: 'User Last Week Activity'
    },
    {
      icon: SendAlarmIcon,
      path: '/user-connect-safe',
      title: 'Send out alarm'
    },
    {
      icon: ReceivedAlarmIcon,
      path: '/user-connect-safe',
      title: 'Received alarm'
    },
    {
      icon: CountryIcon,
      path: '/user-connect-safe',
      title: 'User per country'
    }
  ]
  return (
    <div className="w-full p-4 rounded-2xl bg-neutral-200">
      {SIDE_BAR.map(item => (
        <Link
          className={cn('p-2.5 flex', {
            'bg-red-500 text-white rounded-lg ': item.path === pathname
          })}
          key={item.title}
          to={item.path}
        >
          {createElement(item.icon, {
            className: cn('mr-2.5', {
              'text-white': item.path === pathname
            })
          })}
          {item.title}
        </Link>
      ))}
    </div>
  )
}

export default SideBar
