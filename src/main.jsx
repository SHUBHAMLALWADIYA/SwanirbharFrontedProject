import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginlogoutContextProvider from './context/LoginlogoutContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<LoginlogoutContextProvider>

    <App />
</LoginlogoutContextProvider>
  
)
