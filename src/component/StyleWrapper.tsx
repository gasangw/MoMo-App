import { ReactNode } from 'react'
interface StyleWrapperProps {
  children: ReactNode
  className?: string
}
export default function StyleWrapper({ children, className }: StyleWrapperProps) {
  return <div className={`mx-auto px-2 md:px-6 lg:px-10 ${className}`}>{children}</div>
}
