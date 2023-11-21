import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

interface LinkButtonProps {
  text: string
  className?: string
  path: string
}

export default function LinkButton({ text, className, path }: LinkButtonProps): ReactElement {
  return (
    <Link
      className={`${className} w-full rounded-3xl px-4 py-2 text-center font-Assistant text-sm font-bold sm:py-2.5 2xl:w-96`}
      to={path}
    >
      {text}
    </Link>
  )
}
