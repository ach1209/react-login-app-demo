import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAi8kJ2vuhWUjup8wFYVKZLMnDFpKPnNV4",
  authDomain: "react-login-app-demo.firebaseapp.com",
  projectId: "react-login-app-demo",
  storageBucket: "react-login-app-demo.appspot.com",
  messagingSenderId: "753507882855",
  appId: "1:753507882855:web:071f57a8de6aa75d0d41c2"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
