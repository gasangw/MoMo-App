import { ReactElement } from 'react'

interface IconAndTextProps {
  icon: ReactElement
  text: string
}

function IconAndText({ icon, text }: IconAndTextProps): ReactElement {
  return (
    <div className='flex gap-2 text-gray-100'>
      {icon}
      <span>{text}</span>
    </div>
  )
}

export default IconAndText
