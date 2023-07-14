import './App.scss'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './scences/home/Home'
import Detail from './scences/productDetail/ProductDetail'
import Navbar from './scences/global/header/Navbar'
import Footer from './scences/global/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConstRoutes } from './constant/ConstRoutes'
import { useEffect } from 'react'
import CheckOut from './scences/checkOut/CheckOut'
import Confirmation from './scences/checkOut/Confirmation'
import CartMenu from './scences/global/cartMenu/CartMenu'

const ScrollToTop = () => {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return null
}

function App() {

  return (
    <div className='app'>

    <BrowserRouter>
      <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route  path = { ConstRoutes.home.path } element = { <Home/> } />
      <Route  path = { ConstRoutes.detail.path } element = { <Detail/> } />
      <Route path = { ConstRoutes.checkout.path } element = { <CheckOut/> }  />
      <Route path = { ConstRoutes.confirmation.path } element  = { <Confirmation/> } />
    </Routes>
    <CartMenu/>
    <Footer/>
  </BrowserRouter>
    </div>
      
  )
}

export default App
