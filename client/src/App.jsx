import './App.scss'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './scences/home/Home'
import Detail from './scences/detail/Detail'
import MyNavbar from './scences/global/header/MyNavbar'
import MyFooter from './scences/global/footer/MyFooter'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConstRoutes } from './constant/ConstRoutes'
import { useEffect } from 'react'
function App() {

  const ScrollToTop = () => {
    const {pathname} = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname])
  }
  return (
    <div className='app'>

    <BrowserRouter>
    <MyNavbar/>
    <Routes>
      <Route  path={ConstRoutes.home.path} element={<Home/>} />
      <Route  path={ConstRoutes.detail.path} element={<Detail/>} />
    </Routes>
    <MyFooter/>
  </BrowserRouter>
    </div>
      
  )
}

export default App
