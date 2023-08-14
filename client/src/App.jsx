import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import { ConstRoutes } from './constant/ConstRoutes';
import Cancel from './scences/checkOut/Cancel';
import CheckOut from './scences/checkOut/CheckOut';
import Success from './scences/checkOut/Success';
import CartMenu from './scences/global/cartMenu/CartMenu';
import Footer from './scences/global/footer/Footer';
import Navbar from './scences/global/navbar/Navbar';
import Home from './scences/home/Home';
import ItemDetail from './scences/itemDetail/ItemDetail';
import FavouritePage from './scences/favouritePage/FavouritePage';

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
      <Route path = { ConstRoutes.favourites.path } element = { <FavouritePage/> }  />
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
