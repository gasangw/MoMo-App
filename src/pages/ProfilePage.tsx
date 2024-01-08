import { ReactElement } from 'react'
import StyleWrapper from '../component/StyleWrapper'

export default function ProfilePage(): ReactElement {
  return (
    <StyleWrapper>
      <div className='pt-8 text-blue-900'>
        <h2 className='py-4 font-Poppins text-3xl font-bold'>Personal Information</h2>
        <div className='flex gap-3'>
          <h3 className=''>
            <span>Name</span>: Thomas Gasangwa
          </h3>
        </div>
        <h2 className='py-4 font-Poppins text-3xl font-bold'>Application Status</h2>
      </div>
    </StyleWrapper>
  )
}
