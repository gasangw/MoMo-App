import { Link, Outlet } from 'react-router-dom'
import Logo from '../assets/Logo'
import LogoutIcon from '../assets/LogoutIcon'
import SidebarProfileIcon from '../assets/SidebarProfileIcon'
import MobileNavBar from './MobileNavBar'

export default function ApplicationDashboard() {
  return (
    <div className='grid md:h-screen md:grid-cols-4'>
      <div className='hidden md:grid'>
        <aside className='h-full bg-blue-900 px-3 py-10'>
          <div className='mb-16 flex items-center gap-3'>
            <Logo className='h-16 w-16 rounded-xl' />
            <span className='flex font-Poppins text-2xl font-bold text-yellow-500'>MTN MoMo</span>
          </div>
          <ul className='space-y-2 font-Assistant font-semibold'>
            <li className='text-gray-100 hover:text-gray-950'>
              <Link to='.' className='group flex items-center rounded-lg p-2 hover:bg-gray-100'>
                <SidebarProfileIcon />
                <span className='ms-3'>Profile</span>
              </Link>
            </li>
            <li className='text-gray-100 hover:text-gray-950'>
              <Link
                to='business'
                className='group flex items-center rounded-lg p-2 hover:bg-gray-100'
              >
                <svg
                  className='h-5 w-5 flex-shrink-0 text-yellow-500'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 18 18'
                >
                  <path d='M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z' />
                </svg>
                <span className='ms-3'>About Business</span>
              </Link>
            </li>
            <li className='text-gray-100 hover:text-gray-950'>
              <Link
                to='products'
                className='group flex items-center rounded-lg p-2 hover:bg-gray-100'
              >
                <SidebarProfileIcon />
                <span className='ms-3'>Product</span>
              </Link>
            </li>
            <li className='text-gray-100 hover:text-gray-950'>
              <Link
                to='contractRequirements'
                className='group flex items-center rounded-lg p-2 hover:bg-gray-100'
              >
                <SidebarProfileIcon />
                <span className='ms-3'>Contract Requirements</span>
              </Link>
            </li>
            <li className='mt-auto grid text-gray-100 hover:text-gray-950'>
              <Link
                to='kycdocuments'
                className='group flex items-center rounded-lg p-2 hover:bg-gray-100'
              >
                <LogoutIcon className='text-yellow-500' />
                <span className='ms-3'>KYC Documents</span>
              </Link>
            </li>
            <li className='mt-auto grid text-gray-100 hover:text-gray-950'>
              <Link to='/' className='group flex items-center rounded-lg p-2 hover:bg-gray-100'>
                <LogoutIcon className='text-yellow-500' />
                <span className='ms-3'>Log Out</span>
              </Link>
            </li>
          </ul>
        </aside>
      </div>

      <div className='w-full bg-gray-100 md:col-span-3'>
        <MobileNavBar className='block md:hidden' />
        <Outlet />
      </div>
    </div>
  )
}
