import Logo from '../assets/Logo'
import StyleWrapper from '../component/StyleWrapper'
import UserProfile from './../assets/UserProfile'

interface MobileNavBarProps {
  className?: string
}
export default function MobileNavBar({ className }: MobileNavBarProps) {
  return (
    <div className={`bg-blue-900 py-3 ${className} sticky top-0`}>
      <StyleWrapper className='relative flex justify-between'>
        <div>
          <h1 className='text-xl text-gray-100'>Menu</h1>
        </div>
        <div className='-translate-x-50 absolute left-40 rounded-full bg-blue-900 px-3 pb-4'>
          <Logo className='h-12 w-12 rounded-xl' />
        </div>
        <div>
          <UserProfile className='h-8 w-8 fill-white' />
        </div>
      </StyleWrapper>
    </div>
  )
}
