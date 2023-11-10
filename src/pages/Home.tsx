import { ReactElement } from 'react'
import Button from '../component/Button'
import StyleWrapper from '../component/StyleWrapper'
import personCoding from '/Images/personCoding.jpeg'

export default function Home(): ReactElement {
  return (
    <StyleWrapper className='lg:max-w-7xl'>
      <div className='grid h-screen grid-cols-1 place-items-center gap-4 text-left md:grid-cols-2'>
        <div className='text-left'>
          <div className='flex flex-col font-Poppins text-7xl font-extrabold italic'>
            <h1 className='text-yellow-500'>MoMo</h1>
            <h1 className='-pl-2 text-gray-100'>Open API</h1>
          </div>
          <p className='w-4/5 py-7 font-Assistant text-base text-gray-100'>
            Mobile Money has availed the MoMO API, developers and programmers can innovate on the
            platform and develop products and solutions that will create a wider range of digital
            financial offerings for MoMo customers.
          </p>
          <Button
            text='Apply For MoMo API'
            className='flex w-3/4 cursor-pointer justify-center bg-yellow-500 font-Poppins text-gray-100 hover:border-2 hover:border-yellow-500 hover:bg-transparent hover:text-yellow-500'
          />
        </div>
        <div>
          <img src={personCoding} alt='PersonCodingImage' className='w-full rounded-xl' />
        </div>
      </div>
    </StyleWrapper>
  )
}
