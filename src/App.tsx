import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AccountStatusContext from './context/AccountStatusContext'
import Navbar from './components/Navbar/Navbar'
import HomeView from './views/HomeView'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')

  return (
    <AccountStatusContext.Provider value={{ isLoggedIn, setIsLoggedIn, userName, setUserName }}>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
          </Routes>
        </div>
      </div>
    </AccountStatusContext.Provider>
  )
}

export default App
