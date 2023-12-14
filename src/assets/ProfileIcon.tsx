import { ReactElement } from 'react'

interface ProfileIconProps {
  className?: string
}
export default function ProfileIcon({ className }: ProfileIconProps): ReactElement {
  return (
    <svg width='28' height='28' viewBox='0 0 24 24' fill='none' className={className}>
      <path
        d='M16 15H8C5.79086 15 4 16.7909 4 19V21H20V19C20 16.7909 18.2091 15 16 15Z'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke='#004f71'
      />
      <path
        d='M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke='#004f71'
      />
    </svg>
  )
}
