import { ReactElement } from 'react'

interface InputProps {
  icon: ReactElement
  text: string
  type: string
  className?: string
}
export default function Input({ icon, text, type, className }: InputProps): ReactElement {
  return (
    <div className={`flex w-full gap-3 border-b border-gray-100 align-baseline ${className}`}>
      {icon}
      <input
        type={type}
        className='w-full border-none bg-transparent text-gray-100 outline-none'
        placeholder={text}
      />
    </div>
  )
}
