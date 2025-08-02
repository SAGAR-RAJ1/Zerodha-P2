import { Routes, Route } from 'react-router-dom'
import Navbar from './landing_page/Navbar.jsx'
import Footer from './landing_page/Footer.jsx'
import HomePage from './landing_page/home/HomePage.jsx'
import Signup from './landing_page/signup/Signup.jsx'
import SupportPage from './landing_page/support/SupportPage.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import ProductPage from './landing_page/product/ProductPage.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import NotFound from './landing_page/NotFound.jsx'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/price' element={<PricingPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App