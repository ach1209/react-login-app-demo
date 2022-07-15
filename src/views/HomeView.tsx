import { Link } from 'react-router-dom'
import GreetingCard from "../components/Greeting/GreetingCard"
import GreetingHeader from "../components/Greeting/GreetingHeader"

function HomeView() {
  return (
    <>
      <GreetingCard>
        <GreetingHeader message="Welcome" />
        <p>To access the content, please <Link to="/login">log in</Link> to your account. If you don't have an account created, you can register <Link to="/register">here</Link>.</p>
      </GreetingCard>
    </>
  )
}

export default HomeView