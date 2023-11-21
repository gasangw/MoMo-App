import { Link } from 'react-router-dom'
import KeyIcon from '../assets/KeyIcon'
import MessageIcon from '../assets/MessageIcon'
import ProfileIcon from '../assets/ProfileIcon'
import Button from '../component/Button'
import Input from '../component/Input'

export default function SignupForm() {
  return (
    <form className='flex flex-col space-y-4 py-3'>
      <div className='flex flex-col gap-3 md:flex-row md:justify-between'>
        <div className='grid w-full gap-2'>
          <label htmlFor='firstname' className='py-2 text-lg font-semibold'>
            First Name
          </label>
          <Input icon={<ProfileIcon />} text='firstname' type='text' className='text-xl' />
        </div>
        <div className='grid w-full gap-2'>
          <label htmlFor='lastname' className='py-2 text-lg font-semibold'>
            Last Name
          </label>
          <Input icon={<ProfileIcon />} text='lastname' type='lastname' className='text-xl' />
        </div>
      </div>
      <label htmlFor='email' className='py-2 text-lg font-semibold'>
        Email
      </label>
      <Input icon={<MessageIcon />} text='email' type='text' className='text-xl' />
      <label htmlFor='password' className='py-2 text-lg font-semibold'>
        Password
      </label>
      <Input icon={<KeyIcon />} text='password' type='password' className='text-xl' />
      <label htmlFor='confirmpassword' className='py-2 text-lg font-semibold'>
        Confirm Password
      </label>
      <Input icon={<KeyIcon />} text='confirm password' type='password' className='text-xl' />
      <Button
        text='Sign Up'
        className='w-full bg-yellow-600 font-Poppins text-xl hover:border-2 hover:border-yellow-600 hover:bg-transparent'
      />
      <div className='flex flex-col-reverse items-center gap-2 md:flex-row md:justify-between'>
        <p>
          Have an account?{' '}
          <Link
            to='/login'
            className='text-right text-sm font-semibold text-yellow-500 underline sm:text-base'
          >
            Login
          </Link>
        </p>
      </div>
    </form>
  )
}
