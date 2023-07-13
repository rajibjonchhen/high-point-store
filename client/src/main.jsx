import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { theme } from './theme'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from './state/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
   <ThemeProvider theme={theme}>
        <CssBaseline/>
            <App />
    </ThemeProvider>
  
)
