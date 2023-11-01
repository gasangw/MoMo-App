import Button from '../component/Button'
import StyleWrapper from '../component/StyleWrapper'
import personCoding from '/Images/personCoding.jpeg'
export default function Home() {
  return (
    <StyleWrapper>
      <div className='grid h-[88.5vh] grid-cols-1 place-items-center gap-4 text-left md:grid-cols-2'>
        <div className='text-left'>
          <div className='flex flex-col font-Poppins text-7xl font-extrabold italic'>
            <h1 className='text-yellow-500'>MoMo</h1>
            <h1 className='-pl-2 text-gray-100'>Open API</h1>
          </div>
          <p className='w-3/4 py-7 font-Assistant text-base text-gray-100'>
            Mobile Money has availed the MoMO API, developers and programmers can innovate on the
            platform and develop products and solutions that will create a wider range of digital
            financial offerings for MoMo customers.
          </p>
          <Button
            text='Apply For MoMo API'
            className='cursor-pointer bg-yellow-500 font-Poppins text-gray-100 hover:bg-transparent hover:text-yellow-500'
          />
        </div>
        <div>
          <img src={personCoding} alt='PersonCodingImage' className='rounded-xl' />
        </div>
      </div>
    </StyleWrapper>
  )
}
