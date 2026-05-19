import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const cores = navigator.hardwareConcurrency || 4
const memory = navigator.deviceMemory || 4
if ('serviceWorker' in navigator && cores > 2 && memory > 2) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
