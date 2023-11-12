import { ReactElement } from 'react'
import StyleWrapper from '../component/StyleWrapper'
import LoginForm from './LoginForm'

export default function Login(): ReactElement {
  return (
    <StyleWrapper className='flex items-center justify-center font-Poppins text-gray-100'>
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:max-w-7xl'>
        <div className='w-full md:w-3/4'>
          <h1 className='pb-4 text-left font-Poppins text-4xl font-bold text-gray-100 md:text-6xl'>
            Welcome <span className='font-light text-yellow-500'>Back!</span>
          </h1>
          <LoginForm />
        </div>
        <div className='hidden md:flex'>
          <img
            src='/Images/API.jpg'
            alt='PersonCodingImage'
            className='h-full w-full rounded-xl object-fill'
          />
        </div>
      </div>
    </StyleWrapper>
  )
}
