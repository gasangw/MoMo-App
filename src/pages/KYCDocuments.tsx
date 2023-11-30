import { Link } from 'react-router-dom'
import DownloadIcon from '../assets/DownloadIcon'
import applicationForm from '../assets/GitNotesForProfessionals.pdf'
import Button from '../component/Button'
import StyleWrapper from '../component/StyleWrapper'
import UploadDocument from './UploadDocument'

export default function KYCDocuments() {
  return (
    <StyleWrapper className='pt-8 text-blue-900'>
      <h2 className='py-5 font-Poppins text-3xl font-bold'>KYC Contracting and File Management</h2>
      <div>
        <h4 className='text-lg font-medium'>Download Contracting Requirements</h4>
        <p className='py-3 font-Assistant text-sm italic'>
          Fill and sign these files and then upload them again in the field below
        </p>
        <div className='mt-3 flex w-full space-x-3 bg-gray-200 px-6 py-3'>
          <DownloadIcon />
          <a href={applicationForm} download className='text-base font-medium'>
            Download Application Forms
          </a>
        </div>
      </div>

      <div className='mt-8'>
        <h4 className='text-lg font-medium'>Upload Signed Contracting Requirements</h4>
        <p className='py-3 font-Assistant text-sm italic'>
          Upload all documents as a single PDF file
        </p>
        <UploadDocument />
      </div>
      <div className='mt-8 flex gap-4'>
        <input type='checkbox' className='h-4 w-4' />
        <p className='font-Assistant text-sm font-semibold'>
          I/We certify that the information and supporting documentation provided in this
          application is true and accurate, and that I/We commit to delivering the physical KYC
          documents to MTN Rwanda within 7 days after submission. Failure to comply will lead to the
          service being suspended. I/We also accept to be bound by the MTN Open API{' '}
          <Link to='#' className='text-yellow-500'>
            Terms and Conditions
          </Link>
          .
        </p>
      </div>
      <Button
        text='Submit'
        className='mx-auto my-5 cursor-pointer bg-yellow-500 font-Assistant text-xl text-gray-100'
      />
    </StyleWrapper>
  )
}
