import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  text: string
  className?: string
  path: string
}
export default function Button({ text, className, path }: ButtonProps): ReactElement {
  return (
    <Link
      to={path}
      className={`${className} w-full rounded-3xl px-4 py-2.5 text-center font-Assistant text-sm font-bold md:w-96`}
    >
      {text}
    </Link>
  )
}
