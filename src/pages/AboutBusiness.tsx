import IdIcon from '../assets/IdIcon'
import MessageIcon from '../assets/MessageIcon'
import PhoneIcon from '../assets/PhoneIcon'
import ProfileIcon from '../assets/ProfileIcon'
import Input from '../component/Input'
import StyleWrapper from '../component/StyleWrapper'
import Textarea from '../component/Textarea'

export default function AboutBusiness() {
  return (
    <StyleWrapper className='h-screen pt-8'>
      <h2 className='py-4 font-Poppins text-3xl font-bold text-blue-900'>About Business Owner</h2>
      <form>
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
          <div>
            <label htmlFor='firstName' className='font-Poppins text-base font-medium text-blue-900'>
              First Name
            </label>
            <Input
              icon={<ProfileIcon />}
              text='firstName'
              type='text'
              className='mb-2 border-2 border-gray-200'
            />
            <label htmlFor='name' className='font-Poppins text-base font-medium text-blue-900'>
              Phone Number
            </label>
            <Input
              icon={<PhoneIcon />}
              text='Phone number'
              type='text'
              className='border-2 border-gray-200'
            />
            <label htmlFor='name' className='font-Poppins text-base font-medium text-blue-900'>
              National ID, Passport Number
            </label>
            <Input
              icon={<IdIcon />}
              text='National ID, Passport Number'
              type='text'
              className='border-2 border-gray-200'
            />
          </div>
          <div>
            <label htmlFor='lastName' className='font-Poppins text-base font-medium text-blue-900'>
              Last Name
            </label>
            <Input
              icon={<ProfileIcon />}
              text='lastName'
              type='text'
              className='mb-2 border-2 border-gray-200'
            />
            <label htmlFor='email' className='font-Poppins text-base font-medium text-blue-900'>
              Email
            </label>
            <Input
              icon={<MessageIcon />}
              text='email'
              type='email'
              className='border-2 border-gray-200'
            />
          </div>
        </div>
        <div className='mt-5'>
          <h2 className='py-4 font-Poppins text-3xl font-bold text-blue-900'>About the Business</h2>
          <div>
            <label
              htmlFor='businessName'
              className='font-Poppins text-base font-medium text-blue-900'
            >
              Business Name
            </label>
            <Input text='Business Name' type='text' className='mb-2 border-2 border-gray-200' />
            <label
              htmlFor='businessType'
              className='font-Poppins text-base font-medium text-blue-900'
            >
              Business Type
            </label>
            <Input text='Business Type' type='text' className='border-2 border-gray-200' />
            <label
              htmlFor='businessDescription'
              className='font-Poppins text-base font-medium text-blue-900'
            >
              Business Description
            </label>
            <Textarea />
          </div>
        </div>
      </form>
    </StyleWrapper>
  )
}
