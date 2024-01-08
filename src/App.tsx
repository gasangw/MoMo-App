import { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutBusiness from './pages/AboutBusiness'
import ApplicationDashboard from './pages/ApplicationDashboard'
import DisplayContractRequirements from './pages/ContractRequirements/DisplayContractRequirements'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import KYCDocuments from './pages/KYCDocuments'
import Login from './pages/Login'
import ProductSet from './pages/ProductSet'
import ProfilePage from './pages/ProfilePage'
import Signup from './pages/Signup'

export default function App(): ReactElement {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='dashboard' element={<ApplicationDashboard />}>
          <Route index element={<ProfilePage />} />
          <Route path='business' element={<AboutBusiness />} />
          <Route path='products' element={<ProductSet />} />
          <Route path='contractRequirements' element={<DisplayContractRequirements />} />
          <Route path='kycdocuments' element={<KYCDocuments />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </main>
  )
}
