import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import BusinessIcon from '../assets/BusinessIcon'
import ContractIcon from '../assets/ContractIcon'
import LogoutIcon from '../assets/LogoutIcon'
import ProductIcon from '../assets/ProductIcon'
import UserProfile from '../assets/UserProfile'

export default function Example() {
  return (
    <div className='fixed top-16 w-56 text-right'>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'>
            Options
            <ChevronDownIcon
              className='-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <UserProfile className='mr-2 h-5 w-5' aria-hidden='true' />
                    ) : (
                      <UserProfile className='mr-2 h-5 w-5' aria-hidden='true' />
                    )}
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <span className='mr-2 h-5 w-5' aria-hidden='true'>
                        <BusinessIcon />
                      </span>
                    ) : (
                      <span className='mr-2 h-5 w-5' aria-hidden='true'>
                        <BusinessIcon />
                      </span>
                    )}
                    Duplicate
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className='px-1 py-1'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <span className='mr-2 h-5 w-5' aria-hidden='true'>
                        <ProductIcon />
                      </span>
                    ) : (
                      <span className='mr-2 h-5 w-5' aria-hidden='true'>
                        <ProductIcon />
                      </span>
                    )}
                    Archive
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <span className='mr-2 h-5 w-5' aria-hidden='true'>
                        <ContractIcon />
                      </span>
                    ) : (
                      <span className='mr-2 h-5 w-5' aria-hidden='true'>
                        <ContractIcon />
                      </span>
                    )}
                    Move
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className='px-1 py-1'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <LogoutIcon className='mr-2 h-5 w-5 text-violet-400' aria-hidden='true' />
                    ) : (
                      <LogoutIcon className='mr-2 h-5 w-5 text-violet-400' aria-hidden='true' />
                    )}
                    LogOut
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
