import { useState } from 'react'
import LandingPage from './pages/LandingPage'


export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <LandingPage mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
  )
}

