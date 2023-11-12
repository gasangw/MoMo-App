import { Link } from 'react-router-dom'
import KeyIcon from '../assets/KeyIcon'
import ProfileIcon from '../assets/ProfileIcon'
import Button from '../component/Button'
import Input from '../component/Input'

export default function LoginForm() {
  return (
    <form className='grid space-y-4 py-3'>
      <label htmlFor='email' className='py-2 text-lg font-semibold'>
        Email
      </label>
      <Input icon={<ProfileIcon />} text='email' type='text' className='text-xl' />
      <label htmlFor='password' className='py-2 text-lg font-semibold'>
        Password
      </label>
      <Input icon={<KeyIcon />} text='password' type='password' className='text-xl' />
      <Button
        text='Log In'
        className='w-full bg-yellow-600 font-Poppins text-xl hover:border-2 hover:border-yellow-600 hover:bg-transparent'
      />
      <div className='flex flex-col-reverse items-center gap-2 md:flex-row md:justify-between'>
        <p>
          Not yet a user?{' '}
          <Link
            to='/signup'
            className='text-right text-sm font-semibold text-yellow-500 underline sm:text-base'
          >
            Signup
          </Link>
        </p>
        <Link
          to='/'
          className='text-right text-sm font-semibold text-yellow-500 underline sm:text-base'
        >
          forgot password
        </Link>
      </div>
    </form>
  )
}
