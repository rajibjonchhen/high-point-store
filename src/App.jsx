import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Layout>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/about" render={() => <Detail/>} />
    </Layout>
  </BrowserRouter>
      
  )
}

export default App
