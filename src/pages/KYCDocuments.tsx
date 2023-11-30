import applicationForm from '../assets/GitNotesForProfessionals.pdf'
import StyleWrapper from '../component/StyleWrapper'

export default function KYCDocuments() {
  return (
    <StyleWrapper className='pt-8 text-blue-900'>
      <h2 className='py-5 font-Poppins text-3xl font-bold'>KYC Contracting and File Management</h2>

      <h4 className='text-lg font-medium'>Download Contracting Requirements</h4>
      <p className='py-3 text-sm italic'>
        Fill and sign these files and then upload them again in the field below
        <div className='mt-3 bg-gray-200 px-2 py-3'>
          <a href={applicationForm} download>
            Download Application Form
          </a>
        </div>
      </p>
    </StyleWrapper>
  )
}
