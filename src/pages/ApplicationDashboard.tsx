import { Link, Outlet } from 'react-router-dom'
import BusinessIcon from '../assets/BusinessIcon'
import ContractIcon from '../assets/ContractIcon'
import KycIcon from '../assets/KycIcon'
import Logo from '../assets/Logo'
import LogoutIcon from '../assets/LogoutIcon'
import ProductIcon from '../assets/ProductIcon'
import UserProfile from '../assets/UserProfile'
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
                <UserProfile />
                <span className='ms-3'>Profile</span>
              </Link>
            </li>
            <li className='text-gray-100 hover:text-gray-950'>
              <Link
                to='business'
                className='group flex items-center rounded-lg p-2 hover:bg-gray-100'
              >
                <BusinessIcon />
                <span className='ms-3'>About Business</span>
              </Link>
            </li>
            <li className='text-gray-100 hover:text-gray-950'>
              <Link
                to='products'
                className='group flex items-center rounded-lg p-2 hover:bg-gray-100'
              >
                <ProductIcon />
                <span className='ms-3'>Product</span>
              </Link>
            </li>
            <li className='text-gray-100 hover:text-gray-950'>
              <Link
                to='contractRequirements'
                className='group flex items-center rounded-lg p-2 hover:bg-gray-100'
              >
                <ContractIcon />
                <span className='ms-3'>Contract Requirements</span>
              </Link>
            </li>
            <li className='mt-auto grid text-gray-100 hover:text-gray-950'>
              <Link
                to='kycdocuments'
                className='group flex items-center rounded-lg p-2 hover:bg-gray-100'
              >
                <KycIcon />
                <span className='ms-3'>KYC Documents</span>
              </Link>
            </li>
            <li className='mt-auto grid text-gray-100 hover:text-gray-950'>
              <Link to='/' className='group flex items-center rounded-lg p-2 hover:bg-gray-100'>
                <LogoutIcon />
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
