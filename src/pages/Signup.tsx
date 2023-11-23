import { ReactElement } from 'react'
import StyleWrapper from '../component/StyleWrapper'
import SignupForm from './SignupForm'

export default function Signup(): ReactElement {
  return (
    <StyleWrapper className='flex items-center py-10 font-Poppins text-gray-100 md:h-screen lg:h-auto 2xl:h-screen'>
      <div className='mx-auto flex w-full flex-col gap-3 md:w-3/4 2xl:max-w-7xl'>
        <h1 className='pb-4 text-center font-Poppins text-4xl font-bold text-gray-100 md:text-6xl'>
          Regi<span className='text-yellow-500'>ster</span>
        </h1>
        <SignupForm />
      </div>
    </StyleWrapper>
  )
}
