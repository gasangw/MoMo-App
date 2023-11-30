import { ReactElement } from 'react'

export default function UploadDocument(): ReactElement {
  return (
    <div className='flex w-full items-center justify-center'>
      <label
        htmlFor='dropzone-file'
        className='dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600'
      >
        <div className='flex flex-col items-center justify-center pb-6 pt-5'>
          <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
            <span className='font-semibold'>Click to upload</span> or drag and drop
          </p>
          <p className='text-xs text-gray-500 dark:text-gray-400'>
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input id='dropzone-file' type='file' className='hidden' />
      </label>
    </div>
  )
}
