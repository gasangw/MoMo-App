import { ReactElement, ReactNode } from 'react'
interface StyleWrapperProps {
  children: ReactNode
  className?: string
}
export default function StyleWrapper({ children, className }: StyleWrapperProps): ReactElement {
  return <div className={`mx-auto px-2 md:px-6 ${className}`}>{children}</div>
}
