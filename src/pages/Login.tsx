import { ReactElement } from 'react'
import StyleWrapper from '../component/StyleWrapper'
import LoginForm from './LoginForm'

export default function Login(): ReactElement {
  return (
    <StyleWrapper className='flex h-screen items-center justify-center font-Poppins text-gray-100'>
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:max-w-7xl'>
        <div className='w-full md:w-3/4'>
          <h1 className='pb-4 text-left font-Poppins text-6xl font-bold text-gray-100'>
            Welcome <span className='font-light text-yellow-500'>Back!</span>
          </h1>
          <LoginForm />
        </div>
        <div>
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
