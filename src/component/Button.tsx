import { ReactElement } from 'react'

interface ButtonProps {
  text: string
  className?: string
}
export default function Button({ text, className }: ButtonProps): ReactElement {
  return (
    <div
      className={`${className} w-full rounded-3xl px-4 py-2.5 text-center font-Assistant text-sm font-bold md:w-96`}
    >
      {text}
    </div>
  )
}
