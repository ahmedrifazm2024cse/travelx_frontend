import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Packages from './pages/Packages'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import Enquiry from './pages/Enquiry'
import Booking from './pages/Booking'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'
import PackageDetails from './pages/PackageDetails'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/enquiry" element={<Enquiry />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/package/:id" element={<PackageDetails />} />
    </Routes>
  )
}

export default App
