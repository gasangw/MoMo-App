import { ReactElement } from 'react'
import StyleWrapper from '../component/StyleWrapper'
import LoginForm from './LoginForm'

export default function Login(): ReactElement {
  return (
    <StyleWrapper className='flex h-screen flex-col items-center justify-center font-Poppins text-gray-100 lg:max-w-7xl'>
      <h1 className='pb-4 text-center font-Poppins text-4xl font-bold text-gray-100 md:text-6xl'>
        Login
      </h1>
      <h3 className='pb-4 text-center font-Poppins text-xl text-gray-100 md:text-2xl'>
        Welcome <span className='font-light text-yellow-500'>Back!</span>
      </h3>
      <LoginForm />
    </StyleWrapper>
  )
}
