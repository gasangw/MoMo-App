import { ReactElement } from 'react'
import StyleWrapper from '../component/StyleWrapper'
import SignupForm from './SignupForm'

export default function Signup(): ReactElement {
  return (
    <StyleWrapper className='flex items-center justify-center py-10 font-Poppins text-gray-100'>
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:max-w-7xl'>
        <div className='w-4/5'>
          <h1 className='pb-4 text-left font-Poppins text-4xl font-bold text-gray-100 md:text-6xl'>
            Regist<span className='text-yellow-500'>er</span>
          </h1>
          <SignupForm />
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
