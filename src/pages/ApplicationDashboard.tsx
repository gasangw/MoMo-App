import { Link, Outlet } from 'react-router-dom'
import Logo from '../assets/Logo'

export default function ApplicationDashboard() {
  return (
    <div className='flex'>
      <div>
        <button className='ms-3 p-2 text-lg text-gray-100 sm:hidden'>Menu</button>
        <aside className='h-screen w-64'>
          <div className='h-full bg-blue-900 px-3 py-10'>
            <div className='mb-6 flex items-center gap-3'>
              <Logo className='h-16 w-16 rounded-xl' />
              <span className='flex font-Poppins text-2xl font-bold text-yellow-500'>MTN MoMo</span>
            </div>
            <ul className='mt-20 space-y-2 font-Assistant font-semibold'>
              <li className='text-gray-100 hover:text-gray-950'>
                <Link to='.' className='group flex items-center rounded-lg p-2 hover:bg-gray-100'>
                  <svg
                    className='h-5 w-5 text-yellow-500'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 21'
                  >
                    <path d='M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z' />
                    <path d='M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z' />
                  </svg>
                  <span className='ms-3'>Dashboard</span>
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
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 18 18'
                  >
                    <path d='M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z' />
                  </svg>
                  <span className='ms-3'>Business</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <div className='h-screen w-full border-2 border-red-600 bg-white'>
        <Outlet />
      </div>
    </div>
  )
}
