import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { MobileNavItems } from './MobileNavItems'

const MobileNavItem = MobileNavItems.map((item) => (
  <Menu.Item key={item.name}>
    {({ active }) => (
      <NavLink
        to={item.link}
        className={`${
          active ? 'bg-blue-900 text-white' : 'text-gray-900'
        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
      >
        {active ? (
          <span className='mr-2 h-5 w-5' aria-hidden='true'>
            {item.icon}
          </span>
        ) : (
          <span className='mr-2 h-5 w-5' aria-hidden='true'>
            {item.icon}
          </span>
        )}
        <span className='text-left'>{item.name}</span>
      </NavLink>
    )}
  </Menu.Item>
))

export default function MobileNav() {
  return (
    <div className='fixed w-40 text-right'>
      <Menu as='div'>
        <div className='w-6'>
          <Menu.Button className='inline-flex w-full justify-center rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:text-yellow-500 focus:outline-none focus-visible:ring-2'>
            Menu
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
          <Menu.Items className='right-0 mt-4 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none'>
            <div className='px-1 py-1'>{MobileNavItem}</div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
