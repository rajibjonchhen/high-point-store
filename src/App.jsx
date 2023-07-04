import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Detail from './components/detail/Detail'
import MyNavbar from './components/header/MyNavbar'
import MyFooter from './components/footer/MyFooter'

function App() {

  return (
    <BrowserRouter>
    <MyNavbar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/detail" element={<Detail/>} />
    </Routes>
    <MyFooter/>
  </BrowserRouter>
      
  )
}

export default App
