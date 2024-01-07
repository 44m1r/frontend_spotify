import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  /**
   * Strict Mode is off so that things do not render twice
   */
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
