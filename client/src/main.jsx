import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { theme } from './theme'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './state'

const store  = configureStore({reducer:{
    cart : cartReducer
}})

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store = {store}>
   <ThemeProvider theme={theme}>
        <CssBaseline/>
            <App />
    </ThemeProvider>
</Provider> 
  
)
