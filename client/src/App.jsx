import './App.scss'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './scences/home/Home'
import ItemDetail from './scences/itemDetail/ItemDetail'
import Navbar from './scences/global/header/Navbar'
import Footer from './scences/global/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConstRoutes } from './constant/ConstRoutes'
import { useEffect } from 'react'
import CheckOut from './scences/checkOut/CheckOut'
import CartMenu from './scences/global/cartMenu/CartMenu'
import Success from './scences/checkOut/Success'
import Cancel from './scences/checkOut/Cancel'

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
      <Route  path = { ConstRoutes.itemDetail.path } element = { <ItemDetail/> } />
      <Route path = { ConstRoutes.checkout.path } element = { <CheckOut/> }  />
      <Route path = { ConstRoutes.success.path } element  = { <Success/> } />
      <Route path = { ConstRoutes.unsuccess.path } element  = { <Cancel/> } />
    </Routes>
    <CartMenu/>
    <Footer/>
  </BrowserRouter>
    </div>
      
  )
}

export default App
