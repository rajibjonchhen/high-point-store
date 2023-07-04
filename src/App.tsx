import { useEffect, useState } from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Detail from './components/detail/Detail'
import MyNavbar from './components/header/MyNavbar'
import MyFooter from './components/footer/MyFooter'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConstRoutes } from './constant/ConstRoutes'

function App() {

  return (
    <BrowserRouter>
    <MyNavbar/>
    <Routes>
      <Route  path={ConstRoutes.home.path} element={<Home/>} />
      <Route  path={ConstRoutes.detail.path} element={<Detail/>} />
    </Routes>
    <MyFooter/>
  </BrowserRouter>
      
  )
}

export default App
