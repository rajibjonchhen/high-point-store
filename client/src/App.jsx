import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './scences/home/Home'
import Detail from './scences/detail/Detail'
import MyNavbar from './scences/global/header/MyNavbar'
import MyFooter from './scences/global/footer/MyFooter'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConstRoutes } from './constant/ConstRoutes'

function App() {

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
