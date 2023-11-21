import { ReactElement } from 'react'
import LinkButton from '../component/LinkButton'
import StyleWrapper from '../component/StyleWrapper'
import personCoding from '/Images/personCoding.jpeg'

export default function Home(): ReactElement {
  return (
    <StyleWrapper className='lg:max-w-7xl'>
      <div className='grid h-screen grid-cols-1 place-items-center content-center justify-center gap-4 text-left md:grid-cols-2'>
        <div>
          <div className='flex flex-col text-center font-Poppins text-4xl font-extrabold italic md:text-left lg:text-7xl'>
            <h1 className='text-yellow-500'>
              MoMo
              <br className='hidden md:block' />
              <span className='md:-pl-2 pl-2 text-gray-100'>Open API</span>
            </h1>
          </div>
          <p className='py-7 text-center font-Assistant text-base text-gray-100 md:text-left lg:w-3/4'>
            Mobile Money has availed the MoMO API, developers and programmers can innovate on the
            platform and develop products and solutions that will create a wider range of digital
            financial offerings for MoMo customers.
          </p>
          <LinkButton
            text='Apply For MoMo API'
            className='flex w-4/5 cursor-pointer justify-center bg-yellow-500 font-Poppins text-gray-100 hover:border-2 hover:border-yellow-500 hover:bg-transparent hover:text-yellow-500 lg:w-96'
            path='/login'
          />
        </div>
        <div>
          <img src={personCoding} alt='PersonCodingImage' className='w-full rounded-xl' />
        </div>
      </div>
    </StyleWrapper>
  )
}
