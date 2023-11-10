import Logo from '../assets/Logo'
import StyleWrapper from '../component/StyleWrapper'

export default function Navbar() {
  return (
    <StyleWrapper className='py-4'>
      <Logo className='h-16 w-16' />
    </StyleWrapper>
  )
}
