import Navbar from './components/Navbar/Navbar'
import GreetingCard from './components/Greeting/GreetingCard'
import GreetingHeader from './components/Greeting/GreetingHeader'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <GreetingCard>
          <GreetingHeader message="Welcome" user="User" />
          <p>To access the content, please log in to your account. If you don't have an account created, you can register <a href="/">here</a>.</p>
        </GreetingCard>
      </div>
    </div>
  )
}

export default App
