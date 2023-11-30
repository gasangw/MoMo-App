import DownloadIcon from '../assets/DownloadIcon'
import applicationForm from '../assets/GitNotesForProfessionals.pdf'
import StyleWrapper from '../component/StyleWrapper'

export default function KYCDocuments() {
  return (
    <StyleWrapper className='pt-8 text-blue-900'>
      <h2 className='py-5 font-Poppins text-3xl font-bold'>KYC Contracting and File Management</h2>
      <div>
        <h4 className='text-lg font-medium'>Download Contracting Requirements</h4>
        <p className='py-3 font-Assistant text-sm italic'>
          Fill and sign these files and then upload them again in the field below
        </p>
        <div className='mt-3 flex w-fit space-x-3 bg-gray-200 px-6 py-3'>
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
      </div>
    </StyleWrapper>
  )
}
