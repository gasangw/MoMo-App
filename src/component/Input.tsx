import { ReactElement } from 'react'

interface InputProps {
  icon: ReactElement
  text: string
}
export default function Input({ icon, text }: InputProps): ReactElement {
  return (
    <div className='flex w-1/2 gap-3 border-b-2 border-blue-600 p-3'>
      {icon}
      <input
        type='text'
        className='border-none bg-transparent text-gray-100 placeholder-gray-100 outline-none'
        placeholder={text}
      />
    </div>
  )
}
