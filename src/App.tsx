import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HomeView from './views/HomeView'
import LoginView from './views/LoginView'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
