import './App.scss'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './scences/home/Home'
import Detail from './scences/productDetail/ProductDetail'
import MyNavbar from './scences/global/header/MyNavbar'
import MyFooter from './scences/global/footer/MyFooter'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConstRoutes } from './constant/ConstRoutes'
import { useEffect } from 'react'
import CheckOut from './scences/checkOut/CheckOut'

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
    <MyNavbar/>
    <Routes>
      <Route  path = { ConstRoutes.home.path } element = { <Home/> } />
      <Route  path = { ConstRoutes.detail.path } element = { <Detail/> } />
      <Route path = { ConstRoutes.checkout.path } element = { <CheckOut/> }  />
    </Routes>
    <MyFooter/>
  </BrowserRouter>
    </div>
      
  )
}

export default App
