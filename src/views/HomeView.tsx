import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AccountStatusContext from '../context/AccountStatusContext'
import GreetingCard from '../components/Greeting/GreetingCard'
import GreetingHeader from '../components/Greeting/GreetingHeader'

function HomeView() {
  const { isLoggedIn, userName } = useContext(AccountStatusContext)

  return (
    <>
      <GreetingCard>
        { isLoggedIn ?
          <>
            <GreetingHeader message="Hello" user={userName} />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam vero reprehenderit accusamus libero corporis illo amet suscipit, debitis a! Asperiores nihil, delectus dicta laborum sit natus? Enim corrupti odio cum!</p>
          </>
          :
          <>
            <GreetingHeader message="Welcome" />
            <p>To access the content, please <Link to="/login">log in</Link> to your account. If you don't have an account created, you can register <Link to="/register">here</Link>.</p>        
          </>
        }
      </GreetingCard>
    </>
  )
}

export default HomeView