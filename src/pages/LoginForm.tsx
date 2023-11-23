import { Link } from 'react-router-dom'
import KeyIcon from '../assets/KeyIcon'
import ProfileIcon from '../assets/ProfileIcon'
import Button from '../component/Button'
import Input from '../component/Input'

export default function LoginForm() {
  return (
    <>
      <form className='flex w-full flex-col gap-2 md:w-1/2'>
        <label htmlFor='email' className='text-lg font-semibold'>
          Email
        </label>
        <Input
          icon={<ProfileIcon />}
          text='e.g example@gmail.com'
          type='text'
          className='text-xl'
        />
        <label htmlFor='password' className='text-lg font-semibold'>
          Password
        </label>
        <Input icon={<KeyIcon />} text='password' type='password' className='text-xl' />
        <div className='mt-10'>
          <Button
            text='Log In'
            className='w-full bg-yellow-600 font-Poppins text-xl hover:border-2 hover:border-yellow-600 hover:bg-transparent'
          />
        </div>
      </form>
      <div className='flex w-1/2 flex-col-reverse items-center justify-between  gap-2 pt-2 md:flex-row'>
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
    </>
  )
}
