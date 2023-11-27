import { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutBusiness from './pages/AboutBusiness'
import ApplicationDashboard from './pages/ApplicationDashboard'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

export default function App(): ReactElement {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='dashboard' element={<ApplicationDashboard />}>
          <Route path='business' element={<AboutBusiness />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </main>
  )
}
