import BusinessIcon from '../assets/BusinessIcon'
import ContractIcon from '../assets/ContractIcon'
import KycIcon from '../assets/KycIcon'
import LogoutIcon from '../assets/LogoutIcon'
import ProductIcon from '../assets/ProductIcon'
import UserProfile from '../assets/UserProfile'

export const MobileNavItems = [
  {
    name: 'Profile',
    icon: <UserProfile />,
    link: '.',
  },
  {
    name: 'About Business',
    icon: <BusinessIcon />,
    link: 'business',
  },
  {
    name: 'Product',
    icon: <ProductIcon />,
    link: 'products',
  },
  {
    name: 'Contract Requirements',
    icon: <ContractIcon />,
    link: 'contractRequirements',
  },
  {
    name: 'KYC Documents',
    icon: <KycIcon />,
    link: 'kycdocuments',
  },
  {
    name: 'Log Out',
    icon: <LogoutIcon />,
    link: 'logout',
  },
]
