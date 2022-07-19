import GreetingCard from "../components/Greeting/GreetingCard"
import GreetingHeader from "../components/Greeting/GreetingHeader"

function ProfileView() {
  return (
    <>
      <GreetingCard>
        <GreetingHeader message="Welcome to your Profile Page" user="User" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam vero reprehenderit accusamus libero corporis illo amet suscipit, debitis a! Asperiores nihil, delectus dicta laborum sit natus? Enim corrupti odio cum!</p>
      </GreetingCard>
    </>
  )
}

export default ProfileView