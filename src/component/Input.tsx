import { ReactElement } from 'react'

interface InputProps {
  icon?: ReactElement
  text: string
  type: string
  className?: string
}
export default function Input({ icon, text, type, className }: InputProps): ReactElement {
  return (
    <div
      className={`flex w-full gap-3 rounded-3xl bg-white px-3 py-3 align-baseline focus:bg-[#e8f0fe] ${className}`}
    >
      {icon}
      <input
        type={type}
        className='w-4/5 appearance-none border-none text-blue-900 outline-none focus:bg-transparent active:bg-transparent'
        placeholder={text}
      />
    </div>
  )
}
