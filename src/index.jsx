import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Clock from './Clock.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Clock />
  </React.StrictMode>,
)
